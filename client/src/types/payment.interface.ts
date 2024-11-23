export interface PaymentParams {
	pan: string
	expire: string
	cardholder: string
	cvc: string
}

export interface PaymentRequest {
	jsonrpc: string
	id: string
	method: string
	params: PaymentParams
}

export interface PaymentResponse {
	jsonrpc: string
	id: string
	result?: {
		pid: string
	}
}
export interface PaymentCheckResponse {
	status: 'process' | 'ok' | 'fail'
	pid: string
}
