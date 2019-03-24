import React, { Component, Fragment } from "react";
import {Grid} from "@material-ui/core"
import {
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { Link } from 'react-router-dom'
import Navigation from "./Navigation"
// import

class UserProfile extends Component {
  render() {
    return (
      <div>
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
      <React.Fragment>
      <Fragment>
        <Card>
          <CardContent>
              <Fragment>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CardHeader title={"Shaquon"} />
                </div>
            
                <span>Logged in as: {"ShShaquonawn"}</span>
                <br />
                <span>About: {"bjjaksbjksabsda"}</span>
                <br />
                <span>
                  Member since: 2019
                </span>
                <br />

              </Fragment>

          </CardContent>
        </Card>
      </Fragment>
      </React.Fragment>
      </div>
    );
  }
}

export default UserProfile;
