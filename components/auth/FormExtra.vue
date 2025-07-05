<script setup lang="ts">
defineProps({
	type: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<client-only>
		<div class="d-flex justify-space-between align-items-center flex-wrap">
			<AuthTelegramLogin />
			<AuthGoogle :type="type" />
		</div>
	</client-only>
</template>

<style scoped lang="scss">

</style>
