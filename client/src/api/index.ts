import axios from 'axios';

const url = '{{base_url}}/api/exchange/';

export const fetchCoin = () => {
	axios.get(url);
};
