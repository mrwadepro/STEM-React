import React, { Component } from "react";
import { handleAuthClick } from "../../YoutubeAPI/upload";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../store";
//Components for textFields
import { uploadVideo, addKey } from "../../actions/uploadActions";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaField from "../common/TextAreaFieldGroup";
import { handleClientLoad } from "../../YoutubeAPI/upload";

class Upload extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      key: "",
      owner: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const videoData = {
      description: this.state.description,
      owner: store.getState().auth.user.organization,
      key: window.videoID
    };
    this.props.uploadVideo(videoData);
    // this.props.addKey(videoData);
  }
  handleClick(e) {
    e.preventDefault();
    handleAuthClick(e);
  }
  handleClick(e) {
    e.preventDefault();
    console.log("CLICK");
    handleAuthClick(e);
  }
  render() {
    const { errors } = this.state;
    window.onload = handleClientLoad;
    return (
      <div className="upload">
        <div className="container">
          <button onClick={this.handleClick}>Authorize</button>
          <button id="select-file-button">Select file</button>
          <input id="select-file" type="file" />
          <br />
          <br />
          <button id="upload-file-button">Upload file</button>

          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextAreaField
                  placeholder="Video Description"
                  name="description"
                  type="text"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                <TextFieldGroup
                  placeholder="Key"
                  name="key"
                  type="text"
                  value={this.state.key}
                  onChange={this.onChange}
                  error={errors.key}
                />
                <TextFieldGroup
                  placeholder="Owner"
                  name="owner"
                  type="text"
                  value={this.state.owner}
                  onChange={this.onChange}
                  error={errors.owner}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Upload.propTypes = {
  uploadVideo: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { uploadVideo, addKey }
)(Upload);
