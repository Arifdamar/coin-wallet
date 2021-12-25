import * as api from '../api';

// Action Creators
export const getExchange = () => async (dispatch: any) => {
	try {
		const response: any = await api.fetchExchange();
		dispatch({
			type: 'FETCH_EXCHANGES',
			payload: response.data.data,
		});
	} catch (error: any) {
		console.log(error.message);
	}
};
