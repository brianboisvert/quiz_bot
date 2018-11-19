import React, { Component } from 'react';
import './App.css';
import Body from './containers/body';
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
