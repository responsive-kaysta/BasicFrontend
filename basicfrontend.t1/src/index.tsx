
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';

import './styles/app.css';

const store = createStore(enthusiasm, { enthusiasmLevel: 5, languageName: 'TypeScript' });


ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
