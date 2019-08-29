import React, { Component} from 'react';

import HomePage from './components/homepage.component';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
