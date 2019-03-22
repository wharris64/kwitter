import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Spinner from "react-spinkit";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/Button'
import LoginNav from "./LoginNav"

  

const styles = theme => ({
 
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
      <div>
      <React.Fragment>
      <Grid
        container
        justify="center"
        spacing={16}
        style={{ marginTop: "10vh" }}
      >
        <LoginNav logout={this.handleLogout}/>
      </Grid>
      </React.Fragment>
      <React.Fragment>

      
      <Card className={classes.Paper} >
      <CardContent>
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
        </CardContent>
    </Card>
        
      </React.Fragment>
      </div>
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
