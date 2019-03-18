import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";

class register extends Component {
    state = { username: "", password: "", displayName: "" };
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    handleRegister = event =>{
      e.preventDefault();
    this.props.register(this.state);
  };
    }
    // handleRegister = event => {
    //   if (
    //     this.state.displayName &&
    //     this.state.username &&
    //     this.state.password === this.state.passwordRepeat
    //   ) {
    //     console.log("handle was called");
    //     this.props.register({
    //       username: this.state.username,
    //       password: this.state.password,
    //       displayName: this.state.displayName
    //     });
    //   }};
  
  
    render() 
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
    
  
  export default Signup