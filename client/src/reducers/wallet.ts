const wallet = (wallet: any = [], action: any) => {
	switch (action.type) {
		case 'FETCH_USER_COIN':
			console.log('fetch: ', action.payload);
			return action.payload;
		case 'ADD':
			console.log([...wallet.cryptos, action.payload]);
			return [...wallet, action.payload];
		case 'DELETE':
			console.log(
				wallet.cryptos?.filter(
					(coin: any) => coin.id !== action.payload
				)
			);

			return wallet.cryptos?.filter(
				(coin: any) => coin.id !== action.payload
			);

		default:
			return wallet;
	}
};

export default wallet;
