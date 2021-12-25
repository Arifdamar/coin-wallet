const exchanges: any = (exchanges = [], action: any) => {
	switch (action.type) {
		case 'FETCH_EXCHANGES':
			return action.payload;
		case 'CREATE':
			return [...exchanges, action.payload];
		default:
			return exchanges;
	}
};

export default exchanges;
