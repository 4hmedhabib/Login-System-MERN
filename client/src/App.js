import { Fragment } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
	return (
		<Fragment>
			<SignUp />
			<Login />
		</Fragment>
	);
}

export default App;
