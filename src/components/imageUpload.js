import React, { Component, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
  Input
} from "@material-ui/core";
import { connect } from 'react-redux';
import { InsertPhoto } from "@material-ui/icons";

class ImageUpload extends Component {
  state = {
    open: false,
    file: null
  };

  handleToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleFileChange = event => {
    const file = event.target.files[0];
    this.setState({
      file
    });
  }

  handleUpload = event => {
    const file = this.state.file;
     
    this.handleToggle();

    this.props.uploadImage({token: this.props.token, image: file}); 
  };

  render() {
    const { open } = this.state;

    return (
      <Fragment>

        <IconButton onClick={this.handleToggle} size="small">
          <InsertPhoto />
        </IconButton>

        <Dialog open={open} onClose={this.handleToggle} fullWidth maxWidth="xs">

          <DialogTitle>User Photo</DialogTitle>

          <DialogContent>

            <DialogContentText>
              Would you like to update your photo?
            </DialogContentText>

            <TextField>
              <Input type="file" onChange={this.handleFileChange} />
              <Button color="secondary" onClick={this.handleUpload}>Save Changes</Button>
            </TextField>

          </DialogContent>

        </Dialog>

      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  uploadImage: image => dispatch(uploadImage(image))
});

export default connect(null, mapDispatchToProps)(ImageUpload);
