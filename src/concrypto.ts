import axios, { Axios } from "axios";
import { CreatePaymentSessionPayload } from "./types/session";
import { ApiResponse } from "./types/api";

export class ConCrypto {
	private axios: Axios
	constructor(apiKey: string) {
		this.axios = axios.create({
			baseURL: 'https://concrypto.xyz',
			headers: {
				'x-api-key': apiKey
			}
		})
	}

	/**
		* Creates a new payment session and returns the session_url
	*/
	async createPaymentSession(payload: CreatePaymentSessionPayload) {
		const res = await this.axios.post<ApiResponse<{
			id: string,
			session_url: string
		}>>('/api/v1/sessions', payload)

		return res.data
	}

	// todo: getPaymentSession()
} 
