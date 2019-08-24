import React, { Component} from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.scss';

class App extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ characters: users}))
  }

  constructor() {
    super();

    this.state = {
      characters: []
    }
  }

  render() {
    return (
      <div className="App">
        <CardList first_name="bob">  
          {this.state.characters.map(character => 
            (<h1 key={character.id}>{character.name}</h1>)
          )}
        </CardList>
      </div>
    );
  }
}

export default App;
