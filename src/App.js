import React, { Component } from "react";
import { CardList } from "./components/card/card-list.component";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: undefined
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error));
  }

  onChange = e => {
    this.setState({ searchField: e });
    console.log(this.state.searchField);
  };

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={this.onChange}
        />
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
