import React, { FunctionComponent } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

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
