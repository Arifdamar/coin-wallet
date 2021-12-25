import { combineReducers } from 'redux';
import coins from './wallet';
import exchanges from './exchanges';

export default combineReducers({
	coins,
	exchanges,
});
