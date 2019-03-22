import "../styles/MainPage.css";
import React from "react";
import { Grid, AppBar } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'

import KweetFeed from "./KweetFeed";
import LogOutButton from "./LogOutButton";
import UserProfileSynopsis from "./UserProfileSynopsis";
import MessageBox from "./MessageInputBox.js";
import ProfilePageNavButton from "./ProfilePageNavButton.js";

//changed file name and component name from messagefeed to mainfeed
class MainPage extends React.Component {
  render() {
    return (
      <Grid centered>
        <TextField>
          <TextField >
            <Grid>
              <UserProfileSynopsis />
            </Grid>
          </TextField>

          <TextField >
            <Grid>
              <MessageBox />
              <KweetFeed />
            </Grid>
          </TextField>

          <TextField >
            <Grid>
              <ProfilePageNavButton />
              <LogOutButton />
            </Grid>
          </TextField>
        </TextField>
      </Grid>
    );
  }
}

export default MainPage;