import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getVideos } from "../../actions/uploadActions";
import { store } from "../../store";
import NetflixTile from "../common/NetflixTile";
class Explore extends Component {
  constructor(props) {
    super(props);
    this.props.getVideos();
    this.state = {
      thumbnail: []
    };
  }

  componentDidUpdate(prevState) {
    console.log("Current State->" + this.state.thumbnail);
    console.log("Previous State->" + prevState);

    if (this.props.videos == null) {
      console.log("It's null");
    } else {
      if (this.state !== prevState) {
        const videos = this.props.videos.video.map(video => {
          this.setState(prevState => ({
            thumbnail: [...prevState.thumbnail, video.thumbnail]
          }));
          console.log(this.state.thumbnail);
        });
      }
    }
  }

  render() {
    return (
      <div className="explore">
        <div className="row">
          <NetflixTile videos={this.state.thumbnail} />
        </div>
      </div>
    );
  }
}
Explore.defaultProps = {
  videos: []
};
Explore.propTypes = {
  getVideos: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  videos: PropTypes.object
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  videos: state.videos.videos
});

export default connect(
  mapStateToProps,
  { getVideos }
)(Explore);
