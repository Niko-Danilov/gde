import clsx from 'clsx'
import { FC, useId } from 'react'
import eyes from '../../assets/eyas.svg'
import { ITextField } from '../types/ui-kit.interface'

const UiTextField: FC<ITextField> = ({
	className,
	error,
	label,
	inputProps,
	placeholder,
	eays = false,
	mini = false,
	onClick,
}) => {
	const id = useId()
	return (
		<div
			className={clsx(
				className,
				'flex flex-col gap-2 relative',
				mini && 'w-[40%]'
			)}
		>
			{label && (
				<label htmlFor={id} className='text-grey-800'>
					{label}
				</label>
			)}
			<input
				{...inputProps}
				id={id}
				className={clsx(
					inputProps?.className,
					'px-3 py-2 rounded-lg border-[1px]  focus:outline-primary hover:border-gray-800 text-base relative',
					error && 'border-error'
				)}
				placeholder={placeholder}
			/>
			{error && <div className='text-error text-sm'>{error}</div>}
			{eays && (
				<button className='absolute top-11 right-4 z-10' onClick={onClick}>
					<img src={eyes} />
				</button>
			)}
		</div>
	)
}

export default UiTextField
