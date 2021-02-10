import React, { Component } from 'react';

// algo
// create empty state +++
// make hhtp call on componentDidMount & updateState +++
// update reender to show user data +++
// handle userId change +++

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAvatar: null,
      userName: null,
      userLocation: null,
    };
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const curUserId = this.props.match.params.userId;
    if (prevProps.match.params.userId !== curUserId) {
      this.getUserData(curUserId);
    }
  }

  getUserData = userId => {
    // input: userId
    // output: promise or undefined
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;

        this.setState({
          userAvatar: avatar_url,
          userName: name,
          userLocation: location,
        });
      });
    // TODO make error handling
  };

  render() {
    const { userAvatar, userName, userLocation } = this.state;

    if (!userAvatar || !userName || !userLocation) {
      return null;
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={userAvatar} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{userName}</span>
          <span className="user__location">{userLocation}</span>
        </div>
      </div>
    );
  }
}

export default User;
