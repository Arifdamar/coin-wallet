const exchanges: any = (state = { exchanges: [] }, action: any) => {
	switch (action.type) {
		case 'FETCH_EXCHANGES_REQUEST':
			return { loading: true, exchanges: [] }
		case 'FETCH_EXCHANGES_SUCCESS':
			return { loading: false, exchanges: action.payload }
		case 'FETCH_EXCHANGES_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export default exchanges
