import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/MainApplication';
import './assets/css/fontawesome-all.css';
import './assets/css/styles.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('page-wrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
