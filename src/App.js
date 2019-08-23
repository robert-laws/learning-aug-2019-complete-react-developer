import React, { Component} from 'react';
import './App.css';

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
        {this.state.characters.map(character => 
          (<h1 key={character.id}>{character.name}</h1>)
        )}
      </div>
    );
  }
}

export default App;
