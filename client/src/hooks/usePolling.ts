import { useEffect, useState } from 'react'
import { paymentService } from '../api/api.services'

export const usePolling = (str: string | null) => {
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState<'process' | 'ok' | 'fail' | null>(null)

	useEffect(() => {
		if (!str) {
			return
		}

		const LongPolling = async (str: string) => {
			try {
				setLoading(true)
				const response = await paymentService.checkPaymentStatus(str)

				if (response.status === 'process') {
					setTimeout(() => {
						LongPolling(str)
					}, 3000)
				} else {
					setStatus(response.status)
					setLoading(false)
				}
			} catch (error) {
				console.error('Polling error:', error)
			}
		}

		LongPolling(str)

		return () => {
			setLoading(false)
		}
	}, [str])

	return {
		loading,
		status,
	}
}
