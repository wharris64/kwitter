
import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import ThumbUp from "@material-ui/icons/ThumbUp";

import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
// import moment from "moment";
import { history } from "../configureStore";


class Kweet extends Component {
  render() {
    const { classes } = this.props;
    
  
    return (
      <Card>
          
        <CardContent>
          <Typography>
            "{this.props.text}"
          </Typography>
        </CardContent>
        
        <CardActions>
         
          
          <Typography variant="subtitle1" className={classes.separator} />
          
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => {
  return {
   // deleteKweet: (messageId) => {dispatch(deleteKweet(messageId))},
    //toggleLike: (messageId) => {dispatch(toggleLike(messageId))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kweet);

