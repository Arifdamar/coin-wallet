import * as api from '../api';

// Action Creators

export const getUserCoin = () => async (dispatch: any) => {
	try {
		const response: any = await api.getUserCoinApi();
		dispatch({
			type: 'FETCH_USER_COIN',
			payload: response.data.data,
		});
	} catch (error: any) {
		console.log('getUserCoin Error: ', error.message);
	}
};

export const addUserCoin = (coin: any) => async (dispatch: any) => {
	try {
		console.log(coin);
		const res: any = await api.addUserCoinApi(coin);
		console.log(res);
		dispatch({ type: 'ADD', payload: res.data });
	} catch (error: any) {
		console.log(error.message);
	}
};

export const deleteCoin = (id: string) => async (dispatch: any) => {
	try {
		await api.deleteCoinApi(id);
		dispatch({ type: 'DELETE', payload: id });
	} catch (error) {
		console.log('Delete Error: ', error);
	}
};
