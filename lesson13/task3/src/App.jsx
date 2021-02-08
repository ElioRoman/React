import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Users from './Users.jsx';
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users" component={Users} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
