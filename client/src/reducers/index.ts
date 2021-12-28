import { combineReducers } from 'redux';
import wallet from './wallet';
import exchanges from './exchanges';

export default combineReducers({
	wallet,
	exchanges,
});
