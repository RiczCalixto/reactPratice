import React, {Component} from 'react';
import {CardList} from './components/card/card.component'
import './App.css';

class App extends Component {
  state = {
    monsters: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error))
  }

  render() {
    const {monsters} = this.state;
    return (
      <div className='App'>
        <CardList monsters={monsters} />
      </div>
    )
  }
}

export default App;
