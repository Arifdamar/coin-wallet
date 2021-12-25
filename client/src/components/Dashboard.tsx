import React, { FunctionComponent } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import { fetchExchange } from '../api/index';

interface Props {}

const Dashboard: FunctionComponent<Props> = () => {
	return (
		<div className='flex flex-col md:flex-row h-full w-full'>
			<Sidebar selectedTab='Dashboard' />
			<Content />
		</div>
	);
};

export default Dashboard;
