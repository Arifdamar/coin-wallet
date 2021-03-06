import { FunctionComponent } from 'react'
import FameCoins from './FameCoins'
import CoinChart from './CoinChart'
import MyTopCoins from './MyTopCoins'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
interface Props {}

const Content: FunctionComponent<Props> = () => {
	const { items }: any = useSelector((state: any) => {
		return state.walletChanges
	})
	const walletBalance: any = items.balance

	return (
		<div className='bg-white w-full md:w-3/4 xl:w-5/6 px-6 py-6 flex gap-8'>
			<div className='flex flex-col w-full lg:w-4/6 gap-14'>
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
						<p className='font-display font-medium text-4xl'>
							$ {walletBalance}{' '}
						</p>
					</div>
				</div>

				<div className='flex flex-col w-full gap-12'>
					<div className='flex justify-between'>
						<p className='font-display font-medium'>
							Portfolio assets
						</p>
						<Link
							to='/wallet'
							className='text-coral-red-500 whitespace-nowrap font-medium'
						>
							See all
						</Link>
					</div>
					<div className='flex flex-col gap-6 w-full items-center md:items-start md:flex-row md:justify-between'>
						<div className='hidden md:flex md:w-1/3'>
							<CoinChart />
						</div>
						<div className='w-full md:w-2/3'>
							<MyTopCoins />
						</div>
					</div>
				</div>
			</div>
			<div id='Famous coins' className='hidden lg:flex lg:w-2/6  h-full'>
				<FameCoins />
			</div>
		</div>
	)
}

export default Content
