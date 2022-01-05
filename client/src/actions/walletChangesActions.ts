import axios from 'axios'

// Action Creators
axios.defaults.withCredentials = true

export const addUserCoin = (coin: any) => async (dispatch: any) => {
	try {
		const res: any = await axios.post(`/api/userCrypto`, coin)

		dispatch({ type: 'ADD', payload: res.data.data })
	} catch (error: any) {
		console.log(error.message)
	}
}

export const deleteCoin = (id: string) => async (dispatch: any) => {
	try {
		await axios.delete(`/api/userCrypto/${id}`)
		dispatch({ type: 'DELETE', payload: id })
	} catch (error) {
		console.log('Delete Error: ', error)
	}
}
