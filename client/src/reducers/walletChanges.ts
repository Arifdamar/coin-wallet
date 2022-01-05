const wallet = (state: any = { items: { cryptos: [] } }, action: any) => {
	switch (action.type) {
		case 'WALLET_REQUEST':
			return { loading: true, items: {} }

		case 'WALLET_SUCCESS':
			return { loading: false, items: action.payload }

		case 'WALLET_FAIL':
			return { loading: false, error: action.payload }

		case 'ADD':
			return {
				loading: false,
				items: {
					cryptos: [...state.items.cryptos, action.payload],
				},
			}
		case 'DELETE':
			return {
				loading: false,

				items: {
					...state.items,
					cryptos: state.items.cryptos?.filter(
						(coin: any) => coin._id !== action.payload
					),
				},
			}

		default:
			return state
	}
}

export default wallet
