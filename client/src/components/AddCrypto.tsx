import React, { FunctionComponent, useEffect, useState } from 'react'
import { Select, Input, Loader } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'

import { getExchange } from '../actions/exchanges'
import { addUserCoin } from '../actions/walletChangesActions'

interface Props {}

const AddCrypto: FunctionComponent<Props> = () => {
	const [selectedExchange, setSelectedExchange] = useState<null | string>('')
	const [amount, setAmount] = useState<string>('')
	const [exchange, setExchange] = useState<string>('')
	const [coin, setCoin] = useState<string>('')

	const dispatch = useDispatch()
	const { loading, exchanges }: any = useSelector(
		(state: any) => state.exchanges
	)

	useEffect(() => {
		dispatch(getExchange())
	}, [dispatch])

	const handleAddingCoin = (coin: any) => {
		dispatch(addUserCoin(coin))
	}

	const handleExchangeCoins = () => {
		if (selectedExchange === null) {
			return ['']
		} else {
			const values = exchanges
				.filter((e: any) => {
					return e.name === selectedExchange
				})
				.map((e: any) => e.symbols)
			return values[0]
		}
	}

	const handleUSD = (e: any) => {
		setAmount(e.target.value)
	}

	const handleExchangeChange = (e: any) => {
		setSelectedExchange(e)
		setExchange(e)
	}

	const handleSymbolChange = (e: any) => {
		setCoin(e)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()

		handleAddingCoin({
			exchangeName: exchange.trim(),
			symbol: coin.trim(),
			amount: amount.trim(),
		})
		setAmount('')
		setExchange('')
		setCoin('')
	}

	return (
		<div className='bg-green-100 rounded-2xl py-4 px-8 flex flex-col items-start gap-7'>
			{loading ? (
				<Loader />
			) : (
				<>
					<p className='text-gray-400 text-2xl font-medium whitespace-nowrap'>
						Add Crypto Asset
					</p>

					<form
						onSubmit={handleSubmit}
						className='flex flex-col items-start gap-7'
					>
						<div className='w-full flex flex-col gap-4'>
							<Select
								onChange={handleExchangeChange}
								label='Exchange'
								placeholder='Pick Your Exchange'
								value={exchange}
								clearable
								nothingFound='Nobody here'
								data={exchanges.map((e: any) => e.name)}
							/>
							<Select
								label='Coin'
								placeholder='Pick Your Coin'
								onChange={handleSymbolChange}
								value={coin}
								searchable
								clearable
								data={
									selectedExchange === ''
										? []
										: handleExchangeCoins()
								}
							/>
						</div>
						<div className='w-full flex justify-between space-x-4'>
							<Input
								variant='headless'
								placeholder='Amount'
								onChange={handleUSD}
								value={amount}
								required
								styles={{
									input: {
										width: '100%',
										paddingTop: '1rem',
										paddingBottom: '1rem',
										textAlign: 'center',
									},
								}}
							/>
							<button
								type='submit'
								className='py-4 px-7 bg-green-500 text-white hover:bg-green-700 hover:text-gray-300 '
							>
								Submit
							</button>
						</div>
					</form>
				</>
			)}
		</div>
	)
}

export default AddCrypto
