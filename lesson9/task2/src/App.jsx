import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {

  createUser = userObj => {
    console.log(userObj);
  };

  render() {
    return (<><UserForm createUser={this.createUser} /></>)
  }
}

export default App;
