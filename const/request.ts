export const URL_BINANCE = {
	futures: 'https://fapi.binance.com',
};

export const HEADER_PARAMETERS = {
	content: {
		key: 'Content-Type',
		body: 'application/json',
	},
	accept: {
		key: 'Accept',
		body: 'application/json',
	},
	authorization: {
		key: 'Authorization',
		body: 'Bearer',
	},
};

export const ENDPOINT = {
	auth: {
		login: '/auth/login',
		loginTelegram: '/auth/login-telegram',
		loginGoogle: '/auth/login-google',
		signupMail: '/auth/registration',
		user: '/auth/user',
	},
	bots: {
		gritBot: {
			get: '/gridBot/activeBots',
			create: '/gridBot/create',
			takeProfit: '/gridBot/takeProfit',
			watching: '/gridBot/watching',
		},
	},
	history: {
		gridBot: {
			created: '/history/gridBot/createBot',
		},
	},
	user: {
		apiKey: {
			add: '/user/api',
			delete: '/user/api',
		},
		password: '/user/password',
	},
};

export const ENDPOINT_BINANCE = {
	exchangeInfo: '/fapi/v1/exchangeInfo',
};

export enum ErrorCodes {
	notAdmin = 101,
	notAuth = 100,
}
