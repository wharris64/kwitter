
import "../styles/LogOutButton.css";
import React from "react";
import { Button } from "";
import { connect } from "react-redux";
import { logoutUser } from "../actions/action";

class LogOutButton extends React.Component {
  render() {
    return (
      <Button className="logOutButton" onClick={this.props.logoutUser}>
        Log Out
      </Button>
    );
  }
}

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  null,
  mapDispatchToProps
)(LogOutButton);