import { useLocation } from 'react-router'

export const StatusPage = () => {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const status = queryParams.get('status')

	if (status === 'ok') {
		return (
			<div className='w-full h-screen flex flex-col justify-center text-2xl text-center'>
				Оплата прошла успешно
			</div>
		)
	}

	return <div>Ошибка, оплата не прошла</div>
}
