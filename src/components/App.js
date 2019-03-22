import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, RegisterForm } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
      </Switch>
    );
  }
}

export default App;
