import React from 'react';

import GitCard from './GitCard'
import FriendsList from './FriendsList'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gitCard: [],
      gitFriends: [],
      githubUser: "mcgowent"
    }
  }

  componentDidMount() {
    this.fetchGitCard();
  }

  fetchGitCard = () => {
    fetch(`https://api.github.com/users/${this.state.githubUser}`)
      .then(response => {
        return response.json();
      })
      .then(gitData => this.setState({ gitCard: gitData }))
      .catch(err => {
        console.log(err)
      })
    fetch(`https://api.github.com/users/${this.state.githubUser}/followers`)
      .then(response => {
        return response.json();
      })
      .then(gitFriendData => this.setState({ gitFriends: gitFriendData }))
      .catch(err => {
        console.log(err)
      })
  }


  handleChange = (e) => {
    this.setState({ githubUser: e.target.value })
  }

  submitItem = e => {
    e.preventDefault();
    if (this.state.githubUser === "") {
      return
    } else {
      this.fetchGitCard();
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Put a Search bar in here </h1>



        <form onChange={this.handleChange}>
          <input
            type="text"
            value={this.state.item}
            name="githubUser"
          />
          <button onClick={this.submitItem}>Submit</button>
        </form>
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
