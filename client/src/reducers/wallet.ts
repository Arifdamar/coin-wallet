const wallet = (coins = [], action: any) => {
	switch (action.type) {
		case 'FETCH_USER_COIN':
			return action.payload;
		case 'CREATE':
			return [...coins, action.payload];
		default:
			return coins;
	}
};

export default wallet;
