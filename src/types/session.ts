interface Item {
	name: string,
	description?: string,
	media?: string,
	unit_price: number,
	quantity: number
}

export interface CreatePaymentSessionPayload {
	title: string,
	/**
		* Fixed to USD for now
	*/
	currency: 'USD',
	items: Item[],
	metadata?: any,
	webhook_url: string,
	urls: {
		success: string,
		failure: string
	}
}
