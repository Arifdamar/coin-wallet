import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
	return (
		<Router>
			<div className='App flex flex-row  w-full h-screen overflow-auto'>
				<Switch>
					<Route path='/' exact component={Login} />
					<Route path='/login' component={Login} />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/wallet' component={Wallet} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
