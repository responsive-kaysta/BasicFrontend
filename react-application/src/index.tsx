import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/modules/MainApplication';

import './assets/css/application.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
