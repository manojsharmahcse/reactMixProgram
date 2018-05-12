import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Valuechange from './Valuechange';
import Tabs from './Tabs';
import Edit from './Edit';
import Edit1 from './Edit1';

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
				<Link to='/Edit1'>Edit1</Link>
			</div>

			<Route exact component={App} path="/" />
			<Route component={Tabs} path="/tabs" />
			<Route component={Valuechange} path="/Valuechange" />
			<Route component={Edit1} path="/Edit1" />

		</div>
	 </Router>, document.getElementById('root'));
registerServiceWorker();
