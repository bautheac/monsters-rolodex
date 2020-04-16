import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.jsx';
import SearchBox from './components/search-box/search-box.jsx';

class App extends React.Component {

  constructor(){
    super()
    this.state = { 
      monsters: [] ,
      searchField: ""
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
      .then(res => this.setState({monsters: res}))
  }


  updateSearchfield = (e) => {this.setState({searchField: e.target.value})}
  filterMonsters = (text) => {
    const { monsters } = this.state
    return monsters.filter(monster => monster.name.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          {/* <input type="search" placeholder="Fuck" /> */}
          <SearchBox placeholder="Ta mere?" updateSearchfield={ e => this.updateSearchfield(e) } />
          <CardList monsters={this.filterMonsters(this.state.searchField)}></CardList>
        </div>

    )
  }
}

export default App;
