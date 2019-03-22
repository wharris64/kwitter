import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Kweet from "./Kweet";
import { getMessages, toggleLike } from "../ActionCreators/actions";

const styles = {
  KweetList: {
    margin: "auto",
    marginTop: 50,
    background: "#3f51b5",
    color: "white",
    textAlign: "center",
    borderRadius: "5px"
  }
};

class KweetFeed extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <Fragment>
        <h1 style={styles.KweetList}>Kweet Feed</h1>
          {this.props.messages.map(message => {
          let indexOfUser = this.props.users.findIndex(
            user => user.id === message.userId
          );
          let deleteable = message.userId === this.props.loggedInUser.id
          let user = this.props.users[indexOfUser];
          let userDisplayName = user ? user.displayName : "anon";
          let like = message.likes.filter(like => like.userId === this.props.loggedInUser.id)[0]
          let liked = like ? true : false;
          return (
            <Kweet
              key={message.id}
              id={message.id}
              userId={message.userId}
              text={message.text}
              createdAt={message.createdAt}
              likes={message.likes}
              liked={liked}
              username={userDisplayName}
              deleteable={deleteable}
              userId={message.userId}
              toggleLike={() => this.props.toggleLike(message.id)}
            />
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    //if kweet: props.id is truthy (if its not null, undefined, etc) state.messages.filter()
    messages: props.id ? state.messages.filter(message => message.userId === Number(props.id)) : state.messages,
    users: state.users,
    loggedInUser: state.loggedInUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    },
    toggleLike: (messageId) => {
      dispatch(toggleLike(messageId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KweetFeed);
