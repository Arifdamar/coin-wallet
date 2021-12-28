import * as api from '../api';

// Action Creators

export const getUserCoin = () => async (dispatch: any) => {
	try {
		const response: any = await api.getUserCoin();
		dispatch({ type: 'FETCH_USER_COIN', payload: response.data.data });
	} catch (error: any) {
		console.log(error.message);
	}
};

export const addUserCoin = (coin: any) => async (dispatch: any) => {
	try {
		const data = await api.addUserCoin(coin);
		dispatch({ type: 'ADD', payload: data });
	} catch (error: any) {
		console.log(error.message);
	}
};
