import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getVideos } from "../../actions/videoActions";
import { store } from "../../store";
import TileFeed from "../common/TileFeed";
import Spinner from "../common/Spinner";
class Explore extends Component {
  componentDidMount() {
    this.props.getVideos();
  }
  render() {
    const { videos, loading, key } = this.props.videos;
    let videoContent;
    if (videos === null || loading) {
      videoContent = <Spinner />;
    } else {
      videoContent = <TileFeed thumbnail={videos} />;
    }
    return (
      <div className="explore">
        <div className="row">{videoContent}</div>
      </div>
    );
  }
}

Explore.propTypes = {
  getVideos: PropTypes.func.isRequired,
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
  { getVideos }
)(Explore);
