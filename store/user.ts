import { defineStore } from 'pinia';
import { setCookie } from '~/utils/cookie';
import { COOKIES_TOKEN } from '~/const/const';
import {ENDPOINT} from "~/const/request";
import {useApi} from "~/composables/useApi";

export const userStore = defineStore('userStore', () => {
	const api = useApi();

	const user = ref<USER.IUser | null>(null);
	const userToken = ref('');

	const isAuthenticated = computed(() => !!userToken.value);

	const saveToken = (token: string): void => {
		userToken.value = token;
		setCookie(COOKIES_TOKEN, token, 10);
	};

	const requestSetUser = async (): Promise<void> => {
		try {
			const response = await api.get(ENDPOINT.auth.user);
			if (response?.success) user.value = response?.data || null;
			else deleteUserToken();
		}
		catch (e) {
			deleteUserToken();
		}
	};

	const deleteUserToken = (): void => {
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		userToken.value = '';
	};

	return {
		user,
		userToken,
		isAuthenticated,
		saveToken,
		requestSetUser,
	};
});
