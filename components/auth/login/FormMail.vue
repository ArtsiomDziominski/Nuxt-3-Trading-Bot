<script setup lang="ts">
const showPassword = ref(false);

const user = inject('user') as Ref;
const errors = inject('errors') as Ref;
const checkValidationMail = inject('checkValidationMail') as Function;
const checkValidationPassword = inject('checkValidationPassword') as Function;

const inputMail = async (): Promise<void> => {
	errors.value.mail.message = '';
};

const blurMail = async (): Promise<void> => {
	errors.value.mail.message = '';
	if (user.value.mail) checkValidationMail();
};

const inputPassword = async (): Promise<void> => {
	errors.value.password.message = '';
};

const blurPassword = async (): Promise<void> => {
	errors.value.password.message = '';
	if (user.value.password) checkValidationPassword();
};
</script>

<template>
	<div>
		<v-text-field
			v-model="user.mail"
			class="card__input"
			label="Email"
			placeholder="johndoe@gmail.com"
			type="email"
			variant="outlined"
			name="email"
			:error-messages="errors.mail.message"
			@input="inputMail"
			@blur="blurMail"
		/>

		<v-text-field
			v-model="user.password"
			class="card__input"
			hint="Enter your password to access this website"
			label="Пароль"
			:type="showPassword ? 'text' : 'password'"
			variant="outlined"
			:error-messages="errors.password.message"
			:append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
			name="current-password"
			@input="inputPassword"
			@blur="blurPassword"
			@click:append-inner="showPassword = !showPassword"
		/>
		<div class="card__signup text-caption">
			<span>Нет аккаунта?</span>
			<nuxt-link
				to="/signup"
			>
        Зарегистрироваться
			</nuxt-link>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
