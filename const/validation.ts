import v8n from 'v8n';

export const ruleLoginForm = (val: string) => ({
	validation: v8n().not.empty().length(5, 16).testAll(val),
	length: 'error.ruleLoginLength',
	errors: {
		length: 'error.ruleLoginLength',
		empty: 'error.fieldIsEmpty',
	},
});

export const ruleMailForm = (val: string) => ({
	validation: v8n()
		.not.empty()
		.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
		.length(5, 255)
		.testAll(val),
	errors: {
		pattern: 'error.ruleMail',
		length: 'error.ruleMailLength',
		empty: 'error.fieldIsEmpty',
	},
});

export const rulePasswordForm = (val: string): VALIDATION.ValidationRule => ({
	validation: v8n().not.empty().testAll(val),
	errors: {
		empty: 'error.fieldIsEmpty',
	},
});

export const ruleEmpty = (val: string | undefined | null | number) => ({
	validation: v8n().not.empty().testAll(val),
	errors: {
		empty: 'error.fieldIsEmpty',
	},
});

export const ruleNewPassword = (val: string | undefined | null | number) => ({
	validation: v8n()
		.not.empty()
		.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)
		.testAll(val),
	errors: {
		empty: 'error.fieldIsEmpty',
		pattern: 'error.passwordInvalid',
	},
});

export const ruleCurrentPassword = (val: string | undefined | null | number) => ({
	validation: v8n()
		.not.empty()
		.testAll(val),
	errors: {
		empty: 'error.fieldIsEmpty',
	},
});

export const ruleNewRepeatPassword = (
	val: string | undefined | null | number,
	args: string[],
) => ({
	validation: v8n()
		.not.empty()
		.exact(args[0])
		.testAll(val),
	errors: {
		empty: 'error.fieldIsEmpty',
		exact: 'error.passwordsDoNotMatch',
	},
});
