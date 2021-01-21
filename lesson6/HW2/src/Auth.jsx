import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isSpinner: false,
        };
    }

    showSpinner = () => {
      this.setState({
          isSpinner: true,
      });

      setTimeout(() => {
          this.setState({
              isSpinner: false,
          });
      }, 2000);
  };

    handleLogIn = () => {
        this.setState({
            isLoggedIn: true,
        });
        this.showSpinner();
    };

    handleLogOut = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    render() {
        const button = !this.state.isLoggedIn ? (
            <Login onLogin={this.handleLogIn} />
        ) : (
            <Logout onLogout={this.handleLogOut} />
        );

        return (
            <>
                {this.state.isSpinner ? <Spinner size={55} /> : button}
            </>
        );
    }
}
export default Auth;