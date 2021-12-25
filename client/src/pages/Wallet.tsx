import React, { FunctionComponent } from 'react';
import Sidebar from '../components/Sidebar';
import WalletContent from '../components/WalletContent';

interface Props {}

const Wallet: FunctionComponent<Props> = () => {
	return (
		<div className='flex flex-col md:flex-row h-full w-full'>
			<Sidebar selectedTab='Wallet' />
			<WalletContent />
		</div>
	);
};

export default Wallet;
