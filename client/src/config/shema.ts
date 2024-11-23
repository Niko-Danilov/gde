import * as yup from 'yup'

export const schema = yup
	.object({
		pan: yup
			.string()
			.required()
			.matches(/^\d{13,19}$/),
		expire: yup
			.string()
			.required()
			.matches(/^(0[1-9]|1[0-2])\/(2[1-6])$/),
		cvc: yup
			.string()
			.required()
			.matches(/^\d{3}$/),
		cardholder: yup
			.string()
			.required()
			.matches(/^[A-Za-z]+ [A-Za-z]+$/),
	})
	.required()
