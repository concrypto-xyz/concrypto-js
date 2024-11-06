import axios, { Axios } from "axios";

export class PayWithCrypto {
	private axios: Axios

	constructor(apiKey: string) {
		this.axios = axios.create({
			baseURL: 'https://concrypto.xyz',
			headers: {
				'x-api-key': apiKey
			}
		})
	}
} 
