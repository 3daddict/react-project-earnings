import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
