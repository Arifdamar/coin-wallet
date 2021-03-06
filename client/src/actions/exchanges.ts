import axios from 'axios'

// Action Creators
export const getExchange = () => async (dispatch: any) => {
	try {
		const response = await axios.get('/api/exchange')
		dispatch({ type: 'FETCH_EXCHANGES_REQUEST' })
		dispatch({
			type: 'FETCH_EXCHANGES_SUCCESS',
			payload: response.data.data,
		})
	} catch (error: any) {
		console.log(error.message)
		dispatch({
			type: 'FETCH_EXCHANGES_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
