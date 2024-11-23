import { useCallback, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { paymentService } from '../api/api.services'
import { User } from '../types/user.interface'

export const useHandler = () => {
	const navigate = useNavigate()

	const [eaysType, setEaysType] = useState(true)
	const [data, setData] = useState<string | null>(null)

	const handlerEaysType = useCallback(() => {
		setEaysType((prev) => !prev)
	}, [])

	const onSubmit: SubmitHandler<User> = async (data) => {
		const pid = await paymentService.pay({ ...data })

		if (pid.result?.pid) {
			setData(pid.result.pid)
		}
	}
	return {
		eaysType,
		data,
		handlerEaysType,
		onSubmit,
		navigate,
	}
}
