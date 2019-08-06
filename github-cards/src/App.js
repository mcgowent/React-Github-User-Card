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

  // componentDidUpdate() {
  //   this.handleChange()
  // }

  handleChange = (e) => {
    this.setState({ e.value.target })
    console.log(this.state.githubUser)
  }

  // submitItem = e => {
  //   e.preventDefault();
  //   this.setState({
  //     item: ''
  //   })
  // };

  render() {
    return (
      <div className="App">
        <h1>Put a Search bar in here </h1>



        <form onSubmit={this.submitItem}>
          <input
            type="text"
            value={this.state.item}
            name="githubUser"
            onChange={this.handleChanges}
          />
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
