import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  createUser = userObj => {
    console.log(userObj);
  };
  
  render() {
    return <UserForm createUser={this.createUser} />;
  }
}

export default App;
