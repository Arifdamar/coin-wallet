import React, { FunctionComponent, useEffect, useState } from 'react';
import { Select, Input, Loader } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getExchange } from '../actions/coins';

interface Props {}

// Add Crypto Asset

//         exchange - Binance ve kucoin

//         symbol - (btc-usdt)

//         amount - usd olarak

//         submit

const AddCrypto: FunctionComponent<Props> = () => {
	const [selectedExchange, setSelectedExchange] = useState<null | string>('');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getExchange());
	}, [dispatch]);

	const exchanges: Array<any> = useSelector(
		(state: any) => state.exchanges
	).map((e: any) => e.name);

	let exchangeCoins: Array<any> = useSelector(
		(state: any) => state.exchanges
	);

	const handleExchangeCoins = () => {
		if (selectedExchange === null) {
			return [''];
		} else {
			const values = exchangeCoins
				.filter((e: any) => {
					return e.name === selectedExchange;
				})
				.map((e) => e.symbols);
			return values[0];
		}
	};

	const handleExchangeChange = (e: any) => {
		setSelectedExchange(e);
	};

	return (
		<div className='bg-green-100 rounded-2xl py-4 px-10 flex flex-col items-start gap-7'>
			{exchanges.length === 0 ? (
				<Loader />
			) : (
				<>
					<p className='text-gray-400 text-2xl font-medium whitespace-nowrap'>
						Add Crypto Asset
					</p>
					<div className='w-full flex flex-col gap-4'>
						<Select
							onChange={handleExchangeChange}
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
							data={
								selectedExchange === ''
									? []
									: handleExchangeCoins()
							}
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
				</>
			)}
		</div>
	);
};

export default AddCrypto;
