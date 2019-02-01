import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/modules/MainApplication';
import registerServiceWorker from './registerServiceWorker';

import './assets/css/style.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
