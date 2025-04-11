import {Component} from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const monstersImgs = ["https://robohash.org/", "?set=set2"]
//https://robohash.org/1?set=set2

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      const objs = users.map((usuario, index) => ({
        ...usuario,
        image : `${monstersImgs[0]}${index}${monstersImgs[1]}` 
      }))
      this.setState({monsters : objs})
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    })
  }
  
  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    console.log(monsters);
    return (
      
      <div className="App">
        <h1 className='app-title'>Monsters</h1>

        <SearchBox 
          boxClassName='monster'
          placeHolderText='Enter monster name...'
          onChangeHandler={onSearchChange}
        />
        <CardList list={filteredMonsters} />
      </div>
    );
  }
}

export default App;
