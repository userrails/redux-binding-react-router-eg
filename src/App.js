import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import { ConnectedRouter } from 'connected-react-router'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <ConnectedRouter history={this.props.history}>
            <Routes />
          </ConnectedRouter>
        </header>
      </div>
    );
  }
}

export default App;
