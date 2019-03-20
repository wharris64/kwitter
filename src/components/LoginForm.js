import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField'
import Spinner from "react-spinkit";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    const { classes } = this.props;


    return (
      <React.Fragment>
        <Grid>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <TextField
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          
          <Button className={classes.button} type="submit" disabled={isLoading}>
            Login
          </Button>
          <Button className={classes.button}  >
          <Link to="/register">Register Here</Link>
          </Button>
          
        </form>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
        </Grid>
      </React.Fragment>
    );
  }
}


export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(withStyles(styles)(LoginForm));
