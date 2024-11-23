import clsx from 'clsx'
import { FC } from 'react'
import { IButton } from '../types/ui-kit.interface'
import { UiSpinner } from './ui-spinner'

const UiButton: FC<IButton> = ({ className, loading, title, ...props }) => {
	return (
		<button
			{...props}
			className={clsx(
				className,
				props.disabled
					? 'bg-grey-100 text-grey-400 px-6 py-2 rounded-lg w-[115px] ml-auto'
					: 'bg-primary text-white px-6 py-2 rounded-lg w-[115px] ml-auto hover:bg-[#1A2C88]'
			)}
		>
			{loading ? <UiSpinner /> : title}
		</button>
	)
}

export default UiButton
