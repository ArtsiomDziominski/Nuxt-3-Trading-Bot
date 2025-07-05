<script setup lang="ts">
import { userStore } from '~/store/user';
import { useApi } from "~/composables/useApi";
import { ENDPOINT } from "~/const/request";
import { ruleMailForm, rulePasswordForm } from "~/const/validation";
import { useValidation } from "~/composables/useValidation";

const api = useApi();
const storeUser = userStore();
const validation = useValidation();
const router = useRouter();

const user = ref({
  mail: '',
  password: '',
  captchaToken: '',
})
const errors: Ref<COMMON.Errors> = ref({
  login: { message: '' },
  mail: { message: '' },
  password: { message: '' },
});
const isLoader = ref(false);

const isDisabledBtn = computed((): boolean => {
  return (!!errors.value.mail.message && !!errors.value.password.message) || !user.value.captchaToken;
});

const appendErrors = (error: COMMON.Errors): void => {
  errors.value = { ...errors.value, ...error };
};

const checkValidationMail = (): boolean => {
  const validationRules = ruleMailForm(user.value.mail);
  const { isValid, error } = validation.makeCheckRules('mail', validationRules);
  appendErrors(error);
  return isValid;
};

const checkValidationPassword = (): boolean => {
  const validationRules = rulePasswordForm(user.value.password);
  const { isValid, error } = validation.makeCheckRules('password', validationRules);
  appendErrors(error);
  return isValid;
};

const submit = async (): Promise<void> => {
  const isValidMail = checkValidationMail();
  const isValidPassword = checkValidationPassword();
  if (!isValidMail && !isValidPassword) return;
  const passwordEncrypt = encryptPassword(user.value.password);
  const body = {
    ...user.value,
    password: passwordEncrypt,
  };
  isLoader.value = true;
  const response = await api.post(ENDPOINT.auth.login, body);
  if (response.success) {
    storeUser.saveToken(response.token);
    await storeUser.requestSetUser();
    await router.push('/');
  }
  isLoader.value = false;
};

provide('user', user);
provide('errors', errors);
provide('checkValidationMail', checkValidationMail);
provide('checkValidationPassword', checkValidationPassword);
</script>

<template>
  <v-form
      fast-fail
      class="form"
      @submit.prevent="submit"
  >
    <v-card
        color="secondary"
        class="mx-auto pa-8 card"
    >
      <v-card-title class="card__title">
        <p class="text-h4">
          Вход
        </p>
      </v-card-title>
      <v-card-item class="card__item">
        <AuthFormExtra type="signin" />
        <AuthSignSeparator />
        <AuthLoginFormMail />
      </v-card-item>
      <NuxtTurnstile
          v-model="user.captchaToken"
          class="d-flex justify-center"
      />
      <v-card-actions class="card__actions">
        <v-btn
            class="mt-2"
            type="submit"
            block
            :disabled="isDisabledBtn"
            :loading="isLoader"
        >
          Вход
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<style scoped lang="scss">
.form {
  width: 100%;

  .card {
    min-width: 300px;
    max-width: 600px;
    width: 100%;

    &__title {
      display: flex;
      justify-content: center;
    }

    &__input {
      padding: 6px 0;
    }

    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__signup {
      text-decoration: none;
      color: white;
      display: flex;
      gap: 4px;
    }
  }
}
</style>
