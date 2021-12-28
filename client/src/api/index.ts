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
export const getUserCoin = async () => {
	try {
		const response = await axios.get(`${url}/api/wallet`);
		return response;
	} catch (error: any) {
		console.log(error.response);
		return [];
	}
};

export const addUserCoin = async (coin: any) => {
	try {
		await axios.post(`${url}/api/userCrypto`, coin);
	} catch (error) {
		console.log(error);
	}
};
