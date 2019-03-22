import React from "react";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'

//import { fetchMessages, postMessage } from "../actions/actions";
//have to create actions for fetching messages and posting messages

  class KweetBox extends React.Component {
      state = {
          kweet: ""
      };

      handleKweets = e => {
          this.setState({kweet: e.target.value})
      }
      handleKweetPost = e => {
          this.props.postKweet(this.state.kweet)
          this.setState({ message: "" });
      }
      render() {
        return (
        <Card>
        <CardContent>
          <div className="messages">
            <div className="messageFeed">
                <div>
                <input
                  value={this.state.kweet}
                  placeholder="Kweet here!"
                  type="text"
                  onChange={this.handleKweets}
                />
                <br />
                <button onClick={this.handleKweetPost}>Post Kweet!</button>
                <br />
              </div>
            </div>
          </div>
          </CardContent>
      </Card>
        );
      }
    }
    const mapStateToProps = state => {
        return {
          kweets: state.kweets
        };
      };
      
      const mapDispatchToProps = dispatch => ({
        postMessage: kweet => dispatch(postMessage(kweet))
      });
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(KweetBox);