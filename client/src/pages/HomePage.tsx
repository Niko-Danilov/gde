import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { schema } from '../config/shema'
import { useHandler } from '../hooks/useHandler'
import { usePolling } from '../hooks/usePolling'
import { User } from '../types/user.interface'
import UiButton from '../ui/ui-button'
import UiTextField from '../ui/ui-text-field'

export const HomePage = () => {
	const { data, eaysType, handlerEaysType, onSubmit, navigate } = useHandler()
	const { loading, status } = usePolling(data)

	useEffect(() => {
		if (status === 'ok') {
			navigate(`/pay/check?status=${status}`)
		}
	}, [navigate, status])

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<User>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-[457px] m-auto mt-2 border-[1px] rounded-lg p-5 flex flex-col gap-7'
		>
			<h1 className='text-title'>Оплата банковской картой</h1>
			<UiTextField
				label='Номер карты'
				placeholder='0000 0000 0000 0000'
				inputProps={{ ...register('pan') }}
				error={errors.pan && 'Введите от 13 до 19 числовых символов'}
			/>
			<div className='flex justify-between'>
				<UiTextField
					label='Месяц/год'
					placeholder='Default'
					mini
					inputProps={{ ...register('expire') }}
					error={
						errors.expire &&
						'Два числа, каждое из двух цифр, первое от 1 до 12, второе от 21 до 26 '
					}
				/>
				<UiTextField
					label='Код'
					placeholder='***'
					mini
					eays
					inputProps={{
						...register('cvc'),
						type: eaysType ? 'password' : 'text',
					}}
					error={errors.cvc && 'Состоит из трёх цифр'}
					onClick={handlerEaysType}
				/>
			</div>
			<UiTextField
				label='Владелец карты'
				placeholder='IVAN IVANOV'
				inputProps={{ ...register('cardholder') }}
				error={errors.cardholder && 'Два слова любой длины, без цифр'}
			/>
			<UiButton
				disabled={!isValid || loading}
				loading={loading}
				title='Оплатить'
			/>
		</form>
	)
}
