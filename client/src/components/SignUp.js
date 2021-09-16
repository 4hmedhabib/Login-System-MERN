const SignUp = () => {
	return (
		<form action="">
			<div>
				<label htmlFor="username">Username</label>
				<br />
				<input type="text" name="username" placeholader="Enter your username" id="username" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<br />
				<input type="text" name="password" placeholader="Enter your password" id="password" />
			</div>
		</form>
	);
};

export default SignUp;
