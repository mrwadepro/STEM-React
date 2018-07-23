import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="row h-100">
          <div className="col-6 align-self-center text-center">
            <Link to="/explore" className="btn btn-link">
              <h1 className="text-center">Explore</h1>
            </Link>
          </div>
          <div className="col-6 align-self-center text-center">
            <Link to="/login" className="btn btn-link">
              <h1 className="text-center">Login</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);
