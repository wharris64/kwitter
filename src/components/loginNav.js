import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Hidden,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  withStyles
} from "@material-ui/core";
import { Menu } from '@material-ui/core/Menu'
import { history } from "../configureStore";

const styles = {
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class LoginNav extends Component {
  state = {
    anchor: null
  };

  handleMenuIconClick = event => {
    this.setState({
      anchor: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchor: null
    });
  };

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchor);

    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Hidden lgUp>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleMenuIconClick}
              >
                
              </IconButton>
              <Menu
                open={open}
                anchorEl={this.state.anchor}
                style={{ zIndex: 2 }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => history.push("/profile")}>
                  Your Profile
                </MenuItem>
                <MenuItem onClick={() => history.push("/users")}>
                  User List
                </MenuItem>
              </Menu>
            </Hidden>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              KWITTER
            </Typography>
           
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

LoginNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginNav);