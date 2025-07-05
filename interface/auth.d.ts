export interface IUser {
	login: string;
	mail: string;
}

export interface ILogin {
	password: string;
	mail: string;
	captchaToken: string;
}

export interface ILoginTelegramBody {
	auth_date: number;
	first_name: string;
	hash: string;
	id: number;
}

export interface ISignupMail {
	login: string;
	password: string;
	mail: string;
	captchaToken: string;
}

export as namespace AUTH;
