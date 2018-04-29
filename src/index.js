import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toggle from './Toggle';
import Tabs from './Tabs';


import registerServiceWorker from './registerServiceWorker';
import index from './index';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>

			<div>
				<Link to='/'>Home</Link>&nbsp;
				<Link to='/tabs'>Tab</Link>&nbsp;
				<Link to='/toggle'>Toggle</Link>
			</div>

			<Route exact component={App} path="/" />
			<Route component={Tabs} path="/tabs" />
			<Route component={Toggle} path="/Toggle" />

		</div>
	 </Router>, document.getElementById('root'));
registerServiceWorker();
