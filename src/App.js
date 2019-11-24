import React, { Component } from "react";
import { CardList } from "./components/card/card-list.component";
import { SearchBox } from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error));
  }

  onChange = e => {
    const fieldValue = e.target.value;
    this.setState({ searchField: fieldValue });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Random People</h1>
        <SearchBox
          placeholder={"Search Monster"}
          handleChange={this.onChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
