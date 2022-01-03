import axios from 'axios';

axios.defaults.withCredentials = true;
export const fetchExchange = async () => {
	try {
		const response = await axios.get(`/api/exchange`);

		return response;
	} catch (error: any) {
		console.log(error.response);
		return [];
	}
};

// Wallet
export const getUserCoinApi = async () => {
	try {
		return await axios.get(`/api/wallet`);
	} catch (error: any) {
		console.log(error.response);
		return [];
	}
};

export const addUserCoinApi = async (coin: any) => {
	try {
		const response = await axios.post(`/api/userCrypto`, coin);
		console.log('f', coin);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const deleteCoinApi = async (id: string) => {
	try {
		await axios.delete(`/api/userCrypto/${id}`);
	} catch (error) {
		console.log('delete error: ', error);
	}
};
