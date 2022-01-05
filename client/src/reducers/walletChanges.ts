const wallet = (state: any = { items: { cryptos: [], balance: 0 } }, action: any) => {
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
					cryptos: [...state.items.cryptos, action.payload.newUserCrypto],
					balance: action.payload.balance
				},
			}
		case 'DELETE':
			console.log(state.items.balance)
			return {
				loading: false,

				items: {
					...state.items,
					cryptos: state.items.cryptos?.filter(
						(coin: any) => coin._id !== action.payload
					),
					balance: state.items.cryptos?.filter(
						(coin: any) => coin._id !== action.payload
					).reduce((acc: any, coin: any) => acc + coin.lastPrice * coin.amount, 0)
				},
			}

		default:
			return state
	}
}

export default wallet
