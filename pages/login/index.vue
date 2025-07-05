<script setup lang="ts">
definePageMeta({
  middleware: "unauthenticated",
})
</script>

<template>
	<div class="login-wrapper">
		<AuthLoginForm />
	</div>
</template>

<style scoped lang="scss">
.login-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
