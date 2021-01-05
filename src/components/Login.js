import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

export class Login extends Component {
  static propTypes = {
    authenticate: PropTypes.func,
  };

  handleLogOut = () => {
    auth
      .signOut()
      .then((res) => console.log('logging out', res))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Login First!</h1>
        <button
          onClick={() => this.props.authenticate('Gighub')}
          className="github"
        >
          Login With Github
        </button>
        <button
          onClick={() => this.props.authenticate('Google')}
          className="twitter"
        >
          Login With Google
        </button>
        <button
          onClick={() => this.props.authenticate('Facebook')}
          className="facebook"
        >
          Login With Facebook
        </button>
      </div>
    );
  }
}

export default Login;
