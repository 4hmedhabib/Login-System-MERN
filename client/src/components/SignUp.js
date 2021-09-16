import { useState } from 'react';
import Axios from 'axios';

const SignUp = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const signupFormHandler = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/register', {
			username: username,
			password: username
		});
	};

	return (
		<form onSubmit={signupFormHandler}>
			<div>
				<label htmlFor="username">Username</label>
				<br />
				<input
					type="text"
					name="username"
					placeholader="Enter your username"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<br />
				<input
					type="password"
					name="password"
					placeholader="Enter your password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button>Signup</button>
		</form>
	);
};

export default SignUp;
