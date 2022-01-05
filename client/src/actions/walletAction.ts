import axios from 'axios'

// Action Creators
axios.defaults.withCredentials = true
export const getUserCoin = () => async (dispatch: any) => {
	try {
		dispatch({ type: 'WALLET_REQUEST' })
		const response: any = await axios.get(`/api/wallet`)
		dispatch({
			type: 'WALLET_SUCCESS',
			payload: response.data.data,
		})
	} catch (error: any) {
		dispatch({
			type: 'WALLET_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
