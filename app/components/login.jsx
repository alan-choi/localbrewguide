import React from 'react';
import ReactMixin from 'react-mixin';
// import Auth from '../utils/AuthService';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin(e) {
    e.preventDefault();

    Auth.login(this.state.user, this.state.password)
      .catch((err) => {
        console.log("Error logging in", err);
      });
  }

  render() {
    return (
      <div>
        <form role='form'>
        <div className='form-group'>
          <input type='text' valueLink={this.linkState('username')} placeholder='username' />
          <input type='password' valueLink={this.linkState('password')} placeholder='password' />
        </div>
        <button type='submit' onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
export default Login;
