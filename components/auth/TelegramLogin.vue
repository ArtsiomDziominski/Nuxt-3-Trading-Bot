<template>
	<div id="telegram" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRuntimeConfig } from '#app';

const router = useRouter();

const props = defineProps({
	mode: {
		type: String,
		default: 'callback',
	},
	redirectUrl: {
		type: String,
		default: '',
	},
	requestAccess: {
		type: String,
		default: 'write',
	},
	size: {
		type: String,
		default: 'medium',
	},
	userpic: {
		type: Boolean,
		default: true,
	},
	radius: {
		default: '4',
		type: String,
	},
});

const userLogin = inject('userLogin') as Ref;

onMounted(() => loadingTG());

const requestLoginTelegram = inject('requestLoginTelegram') as Function;

const loadingTG = () => {
	if (import.meta.client) {
		const botUsername = useRuntimeConfig().public.TELEGRAM_BOT;

		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://telegram.org/js/telegram-widget.js?22';

		script.setAttribute('data-telegram-login', botUsername);
		script.setAttribute('data-request-access', props.requestAccess);
		script.setAttribute('data-size', props.size);

		if (props.radius) script.setAttribute('data-radius', props.radius);

		if (props.mode === 'callback') {
			if (window) window.onTelegramAuth = async (payload: AUTH.ILoginTelegramBody) => {
				if (userLogin.value.captchaToken) {
					const isLogin = await requestLoginTelegram(payload);
					if (isLogin) await router.push({ name: 'bots' });
				}
			};

			script.setAttribute('data-onauth', 'onTelegramAuth(user)');
		}

		const telegramEl = document.querySelector('#telegram');
		if (telegramEl) telegramEl.appendChild(script);
	}
};
</script>
