import axios from 'axios';

const url = 'https://coin-wallet-8riwk.ondigitalocean.app';

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
export const getUserCoin = () => {
	axios.get(`${url}/api/wallet`);
};

export const addUserCoin = (coin: any) => {
	axios.post(`${url}/api/userCrypto`);
};
