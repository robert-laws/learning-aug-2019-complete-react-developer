import React, { Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.scss';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
    <Link to='/'>Home Page</Link>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
