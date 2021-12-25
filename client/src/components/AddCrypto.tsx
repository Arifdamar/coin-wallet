import React, { FunctionComponent, useEffect, useState } from 'react';
import { Select, Input } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getExchange } from '../actions/coins';
import exchanges from '../reducers/exchanges';

interface Props {}

// Add Crypto Asset

//         exchange - Binance ve kucoin

//         symbol - (btc-usdt)

//         amount - usd olarak

//         submit

const AddCrypto: FunctionComponent<Props> = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getExchange());
	}, [dispatch]);

	const exchanges: any = useSelector((state: any) => state.exchanges).map(
		(e: any) => e.name
	);

	const exchangeCoins: any = useSelector((state: any) => state.exchanges).map(
		(e: any) => e.symbols
	);

	return (
		<div className='bg-green-100 rounded-2xl py-4 px-10 flex flex-col items-start gap-7'>
			<p className='text-gray-400 text-2xl font-medium whitespace-nowrap'>
				Add Crypto Asset
			</p>
			<div className='w-full flex flex-col gap-4'>
				<Select
					label='Exchange'
					placeholder='Pick Your Exchange'
					searchable
					clearable
					data={exchanges}
				/>
				<Select
					label='Coin'
					placeholder='Pick Your Coin'
					searchable
					clearable
					data={exchangeCoins[0]}
				/>
			</div>
			<div className='w-full flex justify-between gap-20'>
				<Input
					variant='headless'
					placeholder=''
					rightSection='$'
					styles={{
						input: {
							width: '100%',
							boxSizing: 'border-box',
							paddingTop: '1rem',
							paddingBottom: '1rem',
							textAlign: 'center',
						},
					}}
				/>
				<button className='py-4 px-10 bg-green-500 text-white hover:bg-green-700 hover:text-gray-300 '>
					Submit
				</button>
			</div>
		</div>
	);
};

export default AddCrypto;
