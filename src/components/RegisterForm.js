import React, { Component } from "react";
import { register } from "../actions/auth"
import { connect } from "react-redux";
import Spinner from "react-spinkit";

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    displayName: "",
    redirectToLogin: false
  };
  
    handleRegister = e => {
      e.preventDefault();
      this.props.register(this.state);
    };
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    
  
    render() {
    const { isLoading, err } = this.props;
      return (
        <React.Fragment>
          <h1>Create New Account</h1>
          <form onSubmit = {this.handleRegister}>
            <label htmlFor = "username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="DisplayName">DisplayName</label>
            <input
              type="text"
              name="displayName"
              required
              onChange={this.handleChange}
            />

            <button type="submit" disabled={isLoading}>
              Sign Up
            </button>
            
          </form>
          {isLoading && <Spinner name="circle" color="blue" />}
          {err && <p style={{ color: "red" }}>{err}</p>}
        </React.Fragment>
      );
      }
    }
  
      export default connect(
        ({ auth }) => ({
          isLoading: auth.registerLoading,
          err: auth.registerError
        }),
        { register }
      )(RegisterForm);