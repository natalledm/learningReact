import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppFunctional from './AppFunctional';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppFunctional />, document.getElementById('root'));
registerServiceWorker();
