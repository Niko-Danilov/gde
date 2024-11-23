import { ButtonHTMLAttributes, InputHTMLAttributes, PropsWithRef } from 'react'

export type ITextField = {
	className?: string
	error?: string
	label?: string
	placeholder?: string
	mini?: boolean
	eays?: boolean
	onClick?: () => void
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
} & ({ eays: true; onClick: () => void } | { eays?: false | undefined })

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading: boolean
	title: string
}
