import * as React from 'react';
import './styles/app.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BasicFrontend</h1>
        </header>
        <p className="App-intro">
          We build a new & super fancy BasicFrontend based on ReactJS - <a href="https://responsive-it.biz">responsive IT</a>
        </p>
      </div>
    );
  }
}

export default App;
