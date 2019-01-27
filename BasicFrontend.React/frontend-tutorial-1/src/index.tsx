import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// import App from './App';
// import Hello from './Hello';
import Hello from './StatefulHello';

// import './index.css';
import './Hello.css';

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
