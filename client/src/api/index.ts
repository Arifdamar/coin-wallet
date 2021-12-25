import axios from 'axios';

const url = 'http://localhost:8081';

export const fetchExchange = () => {
	return axios.get(`${url}/api/exchange`);
};

// Wallet
export const getUserCoin = () => {
	axios.get(`${url}/api/wallet`);
};

export const addUserCoin = (coin: any) => {
	axios.post(`${url}/api/userCrypto`);
};
