import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCurrentProfile,
  deleteAccount,
  clearCurrentProfile
} from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const uploadButton = (
      <div>
        <p className="lead text-muted">Welcome {user.name}</p>
        <p>You have not yet setup a profile, please add some info.</p>
        <Link to="/upload" className="btn btn-lg btn-info">
          Upload
        </Link>
      </div>
    );
    const videosButton = (
      <div>
        <p className="lead text-muted">Welcome {user.name}</p>
        <p>Click here to show supplied videos.</p>
        <Link to="/explore" className="btn btn-lg btn-info">
          View
        </Link>
      </div>
    );
    let dashboardContent;
    if (profile === null || loading) {
      console.log("Loading");

      dashboardContent = <Spinner />;
    } else {
      //Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="danger btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        //User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info.</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="row">
          {" "}
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              style={{ width: "25px", marginRight: "5px" }}
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              title="You must have a gravatar connected to your email to display an image"
            />
            Logout
          </a>
        </div>
        <div className="row h-100">
          <div className="col-6 align-self-center text-center">
            {videosButton}
          </div>
          <div className="col-6 align-self-center text-center">
            {uploadButton}
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount, clearCurrentProfile, logoutUser }
)(Dashboard);
