import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Valuechange from './Valuechange';
import Tabs from './Tabs';
import Editpage from './Editpage';
import Deletepage from './Deletepage';

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
				<Link to='/Editpage'>Editpage</Link>
				<Link to='/Deletepage'>Deletepage</Link>
			</div>

			<Route exact component={App} path="/" />
			<Route component={Tabs} path="/tabs" />
			<Route component={Valuechange} path="/Valuechange" />
			<Route component={Editpage} path="/Editpage" />
			<Route component={Deletepage} path="/Deletepage" />

		</div>
	 </Router>, document.getElementById('root'));
registerServiceWorker();
