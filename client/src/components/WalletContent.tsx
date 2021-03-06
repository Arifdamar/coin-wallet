import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCoin } from '../actions/walletAction'

import { Loader } from '@mantine/core'

import UserCoin from './UserCoin'
import bitcoin from '../images/btc.svg'

import AddCrypto from './AddCrypto'

interface Props {}

const WalletContent: FunctionComponent<Props> = () => {
	const dispatch = useDispatch()

	const { loading, items }: any = useSelector(
		(state: any) => state.walletChanges
	)
	const { cryptos } = items
	const { balance } = items
	console.log(balance)
	console.log(items)
	useEffect(() => {
		dispatch(getUserCoin())
	}, [dispatch])

	return (
		<div className='bg-white w-full md:w-3/4 xl:w-5/6 px-20 py-6 flex gap-8'>
			<div className='flex flex-col w-full gap-14 h-full'>
				<div className='hidden md:flex md:flex-row md:justify-end md:w-full gap-2'>
					<div className='border rounded-full text-amethyst-smoke-900 flex px-3 py-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
						<input
							type='text'
							className='text-center outline-none'
						/>
					</div>
					<div className='border rounded-full p-2 text-amethyst-smoke-800'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
							/>
						</svg>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<p className='font-display font-thin text-amethyst-smoke-400'>
						Total balance
					</p>
					<div className='flex items-end gap-4'>
						{!loading && (
							<p className='font-display font-medium text-4xl'>
								$ {balance}{' '}
							</p>
						)}
					</div>
				</div>
				<div className='flex w-full justify-between gap-12 max-h-96'>
					<img src={bitcoin} alt='btc' className='absolute mx-auto' />
					<div className='flex flex-col gap-5 h-full w-full overflow-y-auto z-20 items-center'>
						{loading ? (
							<Loader />
						) : cryptos.length > 0 ? (
							cryptos.map((coin: any) => (
								<UserCoin coin={coin} key={coin.id} />
							))
						) : (
							'there is nothing here'
						)}
					</div>
					<AddCrypto />
				</div>
			</div>
		</div>
	)
}

export default WalletContent
