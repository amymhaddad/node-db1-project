import React from 'react';
import { Route } from 'react-router-dom';
import Accounts from './Accounts';
import Home from './Home';
import Account from './Account';

function App() {
	return (
		<div>
			<Route path="/" exact component={Home} />
			<Route path="/accounts" exact component={Accounts} />
			<Route path="/accounts/:accountId" component={Account} />
		</div>
	);
}

export default App;
