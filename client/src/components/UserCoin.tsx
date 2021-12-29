import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoin } from '../actions/wallet';

interface Props {
	amount: number;
	logo: string;
	price: number;
	symbol: string;
	exchange: string;
	id: string;
}

const UserCoin: FunctionComponent<Props> = ({
	amount,
	logo,
	price,
	symbol,
	exchange,
	id,
}) => {
	const [deleted, setDeleted] = useState<Boolean>(false);
	const dispatch = useDispatch();

	const handleDeleteEvent = (e: any) => {
		e.preventDefault();

		dispatch(deleteCoin(id));
		setDeleted(true);
	};

	return (
		<div className='w-full bg-red-100 px-4 py-6 flex justify-between items-center'>
			<div className='flex flex-col gap-2 items-center'>
				<img src={logo} alt='Coin' className='rounded-full h-9 ' />
				<p
					className={
						exchange === 'Binance'
							? 'text-yellow-400 font-medium text-lg'
							: 'text-green-300 font-medium text-lg'
					}
				>
					{exchange}
				</p>
			</div>
			<p
				className={
					exchange === 'Binance'
						? 'text-yellow-400 font-medium text-lg'
						: 'text-green-300 font-medium text-lg'
				}
			>
				{symbol}
			</p>
			<div className='flex gap-10 items-center'>
				<p
					className={
						exchange === 'Binance'
							? 'text-yellow-400 font-medium text-lg'
							: 'text-green-300 font-medium text-lg'
					}
				>
					{amount.toFixed(2)}
				</p>
				<p
					className={
						exchange === 'Binance'
							? 'text-yellow-400 font-medium text-lg'
							: 'text-green-300 font-medium text-lg'
					}
				>
					{price.toFixed(2)}
				</p>
				<p
					className={
						exchange === 'Binance'
							? 'text-yellow-400 font-medium text-lg'
							: 'text-green-300 font-medium text-lg'
					}
				>
					{(price * amount).toFixed(2)}
				</p>
			</div>
			<div className='flex items-center gap-2'>
				<button
					className='rounded-full p-2 bg-red-700 hover:bg-white text-white hover:text-red-400 transform duration-200 hover:scale-125'
					onClick={handleDeleteEvent}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 '
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default UserCoin;
