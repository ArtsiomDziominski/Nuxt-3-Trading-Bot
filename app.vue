<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import {userStore} from "~/store/user";

const storeUser = userStore();
const { userToken, isAuthenticated } = storeToRefs(storeUser);

await useAsyncData('app', (app) => {
  const cookie = app?.ssrContext?.event.node.req.headers?.cookie || '';
  const cookieArray = cookie.split(';');
  const cookieObject: Record<string, string> = {};
  cookieArray.forEach((c) => {
    const cookArray = c.split('=');
    cookieObject[cookArray[0].trim()] = cookArray[1];
  });

  userToken.value = cookieObject?.['token'];

  return Promise.allSettled([
    isAuthenticated.value && storeUser.requestSetUser(),
  ]);
});
</script>

<style lang="scss">
</style>
