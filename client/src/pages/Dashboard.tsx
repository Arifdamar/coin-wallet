import React, { FunctionComponent } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import { fetchCoin, getUserCoin } from '../api/index';

interface Props {}

const Dashboard: FunctionComponent<Props> = () => {
	fetchCoin();
	getUserCoin();
	return (
		<div className='flex flex-col md:flex-row h-full w-full'>
			<Sidebar selectedTab='Dashboard' />
			<Content />
		</div>
	);
};

export default Dashboard;
