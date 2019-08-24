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
      characters: [],
      searchField: ''
    }
  }

  handleChange = event => {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchField.toLowerCase()))
    

    return (
      <div className="App">
        <input type='search' placeholder='search characters' value={this.state.searchField} onChange={this.handleChange} />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
