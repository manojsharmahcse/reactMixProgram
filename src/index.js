import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Valuechange from './Valuechange';
import Tabs from './Tabs';
import Edit from './Edit';


import registerServiceWorker from './registerServiceWorker';
import index from './index';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>

			<div>
				<Link to='/'>Home</Link>&nbsp;
				<Link to='/tabs'>Tab</Link>&nbsp;
				<Link to='/Valuechange'>Valuechange</Link>
				<Link to='/Edit'>Edit</Link>
			</div>

			<Route exact component={App} path="/" />
			<Route component={Tabs} path="/tabs" />
			<Route component={Valuechange} path="/Valuechange" />
			<Route component={Edit} path="/Edit" />

		</div>
	 </Router>, document.getElementById('root'));
registerServiceWorker();
