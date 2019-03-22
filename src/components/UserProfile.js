import React, { Component } from "react";
import {Grid} from "@material-ui/core"
import Navigation from "./Navigation"




class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
      <Grid
        container
        justify="center"
        spacing={16}
        style={{ marginTop: "10vh" }}
      >
        <Navigation logout={this.handleLogout}/>
      </Grid>
      </React.Fragment>
     )
  }
}

export default UserProfile;
