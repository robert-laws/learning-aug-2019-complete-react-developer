import React, { Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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
        <h1>Characters Rolodex</h1>
        <SearchBox placeholder='search characters' handleChange={this.handleChange} value={this.state.searchField} />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
