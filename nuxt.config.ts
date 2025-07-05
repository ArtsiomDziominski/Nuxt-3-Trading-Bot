// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
		'~/assets/css/global.css',
	],

	build: {
		transpile: ['vuetify'],
	},
	modules: [
		'@pinia/nuxt',
		'@nuxt/eslint',
		'@nuxtjs/turnstile',
	],

	runtimeConfig: {
		public: {
			API_URL: process.env.API_URL,
			WS_URL: process.env.WS_URL,
			SECRET_KEY_API: process.env.SECRET_KEY_API,
			TELEGRAM_BOT: process.env.TELEGRAM_BOT,
			NUXT_TURNSTILE_SECRET_KEY: process.env.NUXT_TURNSTILE_SECRET_KEY,
		},
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				// ...
			},
		},
	},

	alias: {
		'form-data': 'form-data'
	},

	turnstile: {
		siteKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
	},

	compatibilityDate: '2025-07-01',
});
