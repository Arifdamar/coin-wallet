const wallet = (wallet: any = [], action: any) => {
	switch (action.type) {
		case 'FETCH_USER_COIN':
			return action.payload;
		case 'ADD':
			return [...wallet.cryptos, action.payload];
		case 'DELETE':
			console.log('girdi delete', action.payload);
			const a = wallet.cryptos?.filter(
				(coin: any) => coin.id !== action.payload
			);
			console.log(a);
			return a;

		default:
			return wallet;
	}
};

export default wallet;
