import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/MainApplication';
import registerServiceWorker from './registerServiceWorker';

import './assets/css/fontawesome-all.css';
import './assets/css/styles.css';

ReactDOM.render(
  <App />,
  document.getElementById('page-wrapper') as HTMLElement
);
registerServiceWorker();
