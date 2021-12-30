import axios from 'axios';

//const url = 'https://coin-wallet-8riwk.ondigitalocean.app';
const url = 'http://localhost:8081';

axios.defaults.withCredentials = true;
export const fetchExchange = async () => {
	try {
		const response = await axios.get(`${url}/api/exchange`);
		return response;
	} catch (error: any) {
		console.log(error.response);
		return [];
	}
};

// Wallet
export const getUserCoinApi = async () => {
	try {
		const response = await axios.get(`${url}/api/wallet`);
		return response;
	} catch (error: any) {
		console.log(error.response);
		return [];
	}
};

export const addUserCoinApi = async (coin: any) => {
	try {
		const response = await axios.post(`${url}/api/userCrypto`, coin);
		console.log('f', coin);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const deleteCoinApi = async (id: string) => {
	try {
		await axios.delete(`${url}/api/userCrypto/${id}`);
	} catch (error) {
		console.log('delete error: ', error);
	}
};
