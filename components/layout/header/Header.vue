<script setup lang="ts">
import { useTheme } from 'vuetify';
import { localStorageKeyTheme, colorScheme } from '~/const/theme';

const theme = useTheme();
function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? colorScheme.light : colorScheme.dark;
	localStorage.setItem(localStorageKeyTheme, theme.global.name.value);
}
</script>

<template>
	<v-app-bar>
		<template #prepend>
			<v-icon icon="$vuetify" />
		</template>

		<v-app-bar-title>Application Bar</v-app-bar-title>
		<v-btn @click="toggleTheme">
			{{ theme.global.name.value }}
		</v-btn>
	</v-app-bar>
</template>

<style scoped lang="scss">

</style>
