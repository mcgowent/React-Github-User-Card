import React from 'react';

import GitCard from './GitCard'
import Header from './Header'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gitCard: []
    }
  }

  componentDidMount() {
    this.fetchGitCard();
  }

  fetchGitCard = () => {
    fetch('https://api.github.com/users/mcgowent')
      .then(response => {
        return response.json();
      })
      .then(gitData => this.setState({ gitCard: gitData }))
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <GitCard data={this.state.gitCard} />
      </div>
    );
  }
}

export default App;
