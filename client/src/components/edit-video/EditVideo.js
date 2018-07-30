import React, { Component } from "react";
import { getVideoById } from "../../actions/videoActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class EditVideo extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getVideoById(this.props.match.params.id);
    }
  }
  render() {
    return <div>HI</div>;
  }
}

EditVideo.propTypes = {
  getVideoById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  videos: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  videos: state.videos
});
export default connect(
  mapStateToProps,
  { getVideoById }
)(EditVideo);
