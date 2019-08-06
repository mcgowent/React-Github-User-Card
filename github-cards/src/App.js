import React from 'react';

import GitCard from './GitCard'
import Header from './Header'
import FriendsList from './FriendsList'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gitCard: [],
      gitFriends: []
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
    fetch('https://api.github.com/users/mcgowent/followers')
      .then(response => {
        return response.json();
      })
      .then(gitFriendData => this.setState({ gitFriends: gitFriendData }))
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">
        <Header />
        {console.log(this.state.gitFriends)}
        <GitCard data={this.state.gitCard} />
        <h2 className="mid_bar">Github Friends</h2>
        <div className="flex_wrap">
          {this.state.gitFriends.map(e => { return (<FriendsList key={e.id} data={e} />) })}
        </div>
      </div>
    );
  }
}

export default App;
