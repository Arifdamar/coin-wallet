import * as api from '../api';

// Action Creators

export const getUserCoin = () => async (dispatch: any) => {
	try {
		const data = await api.getUserCoin();
		dispatch({ type: 'FETCH_USER_COIN', payload: data });
	} catch (error: any) {
		console.log(error.message);
	}
};

export const addUserCoin = (coin: any) => async (dispatch: any) => {
	try {
		const data = await api.addUserCoin(coin);
		dispatch({ type: 'CREATE', payload: data });
	} catch (error: any) {
		console.log(error.message);
	}
};
