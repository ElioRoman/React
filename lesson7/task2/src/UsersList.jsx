import React, { Component } from 'react'
import User from './User'

class UsersList extends Component {
  state ={
    sorting: null
  }
  
  toggleSorting = ()=>{
    const newSorting = this.state.sorting === 'asc'
    ? 'desc'
    : 'asc';

    this.setState({
      sorting: newSorting
    })
  }

  render(){
    let userslist;
    if (this.state.sorting){
       userslist = this.props.users.slice().sort((a,b)=>this.state.sorting === 'asc'
    ? a.age-b.age
    : b.age - a.age
    )} else {
      userslist = this.props.users
    }


    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>{
          this.state.sorting || '-'
        }</button>
      
      <ul className="users">
        {this.props.users.map(user=> <User  key={user.id} {...user} />)}
      </ul>
      </div>
    )
  }
}

export default UsersList