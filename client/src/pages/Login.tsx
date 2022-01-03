import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, PasswordInput } from '@mantine/core';
import { useHistory } from 'react-router-dom';
import { Alert } from '@mantine/core';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [loginStatus, setLoginStatus] = useState(false);
	const [isLoginFailed, setIsLoginFailed] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const history = useHistory();

	axios.defaults.withCredentials = true;

	const login = async () => {
		try {
			const response = await axios.post(`/api/auth/login`, {
				email,
				password,
			});

			setLoginStatus(response.data.status);
			if (response.data.status) {
				history.push('/dashboard');
			} else {
				console.log(response.data.message);
			}
		} catch (error: any) {
			console.log('ErrorX:', error.response.data);
			setErrorMessage(error.response.data.message);
			setIsLoginFailed(true);
		}
	};

	const checkIsLoggedIn = async () => {
		try {
			const response = await axios.get(`/api/auth/me`);

			if (response.data.status) {
				history.push('/dashboard');
			}
		} catch (error) {
			console.log('ErrorY: ', error);
		}
	};

	useEffect(() => {
		checkIsLoggedIn();
	}, []);

	return (
		<div className='login-page w-full h-full flex justify-center items-center'>
			<div className='bg-white rounded-xl flex flex-col justify-start items-start py-10 px-5 gap-3'>
				<div className='w-full flex justify-center'>
					<p className='text-black font-medium text-xl justify-center'>
						Log in
					</p>
				</div>
				<div className='w-full'>
					<p className='font-normal text-lg'>Email</p>
					<Input
						icon={
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
									d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
								/>
							</svg>
						}
						placeholder='Your email'
						radius='md'
						onChange={(e: any) => {
							setEmail(e.target.value);
						}}
					/>
				</div>

				<div className='w-full'>
					<p className='font-normal text-lg'>Password</p>
					<PasswordInput
						radius='md'
						onChange={(e: any) => {
							setPassword(e.target.value);
						}}
						icon={
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
									d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
								/>
							</svg>
						}
					/>
				</div>
				<div className={isLoginFailed ? 'w-full' : 'hidden'}>
					<Alert
						icon={
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
									d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						}
						title='Error!'
						color='red'
						withCloseButton
					>
						{errorMessage}
					</Alert>
				</div>
				<div className='w-full pt-8'>
					<button
						onClick={login}
						className='w-full px-10 py-2 bg-blue-400 text-white text-xl rounded-xl'
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
