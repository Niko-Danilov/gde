import axios, { AxiosResponse } from 'axios'
import {
	PaymentCheckResponse,
	PaymentParams,
	PaymentRequest,
	PaymentResponse,
} from '../types/payment.interface'

export class PaymentService {
	private apiUrl: string

	constructor(apiUrl: string) {
		this.apiUrl = apiUrl
	}

	public async pay(paymentParams: PaymentParams): Promise<PaymentResponse> {
		const requestPayload: PaymentRequest = {
			jsonrpc: '2.0',
			id: this.generateUniqueId(),
			method: 'pay',
			params: paymentParams,
		}

		try {
			const response: AxiosResponse<PaymentResponse> = await axios.post(
				`${this.apiUrl}/api`,
				requestPayload
			)
			return response.data
		} catch (error) {
			console.error('Error sending payment request:', error)
			throw error
		}
	}

	public async checkPaymentStatus(str: string): Promise<PaymentCheckResponse> {
		try {
			const response: AxiosResponse<PaymentCheckResponse> = await axios.get(
				`${this.apiUrl}/pay/check/${str}`
			)
			return response.data
		} catch (error) {
			console.error('Error checking payment status:', error)
			throw error
		}
	}

	private generateUniqueId(): string {
		return `id_${Date.now()}`
	}
}

export const paymentService = new PaymentService('http://localhost:4000')
