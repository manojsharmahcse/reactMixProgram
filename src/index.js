import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toggle from './Toggle';
import Tabs from './Tabs';
import index from './index';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tabs /> , document.getElementById('root'));
registerServiceWorker();
