import React, { Component } from 'react';
import { signup } from './auth-service';
import { Link } from 'react-router-dom';
import Button from '../Button';

class Signup extends Component {
  state = {
    
      username: '',
      password: '',
      campus: '',
      course: '',
      image: '',
    
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    signup(this.state)
      .then((response) => {
        this.setState({ username: '', password: '' });
        // this.props.updateUser(response)
      })
      .catch((error) => console.log(error));
  };

  // HERE
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } );
  };

  render() {
    return (
      <div className="signup">
        {/* HERE */}
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Campus:
            <select
              name="campus"
              value={this.state.campus}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Miami">Miami</option>
              <option value="Paris">Paris</option>
              <option value="Berlin">Berlin</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="México">México</option>
              <option value="Sao Paulo">Sao Paulo</option>
              <option value="Lisbon">Lisbon</option>
            </select>
          </label>
          <label>
            Course:
            <select
              name="course"
              value={this.state.course}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="Web Dev">Web Dev</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
          </label>

          <Button text="signup" />
        </form>

        <p>
          Already have account?
          <Link to={'/'}>
            <Button text="Login" />
          </Link>
        </p>
      </div>
    );
  }
}

export default Signup;
