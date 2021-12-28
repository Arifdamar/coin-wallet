const wallet = (wallet = [], action: any) => {
	switch (action.type) {
		case 'FETCH_USER_COIN':
			return action.payload;
		case 'ADD':
			return [...wallet, action.payload];
		default:
			return wallet;
	}
};

export default wallet;
