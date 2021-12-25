import * as api from '../api';

// Action Creators
export const getCoins = () => async (dispatch: any) => {
	try {
		const data = await api.fetchCoin();
		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (error: any) {
		console.log(error.message);
	}
};
