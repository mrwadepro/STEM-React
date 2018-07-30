import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import { log } from "util";

class TileFeed extends Component {
  render() {
    const { thumbnail, _id } = this.props;

    return thumbnail.map(thumb => {
      console.log(thumb._id);

      return (
        <div key={thumb._id} className="row__inner">
          <Link to={`editvideo/${thumb._id}`}>
            <div className="tile">
              <div className="tile__media">
                <img
                  className="tile__img"
                  id="thumbnail"
                  src={thumb.thumbnail}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }
}

TileFeed.PropTypes = {
  videos: PropTypes.array.isRequired
};

export default TileFeed;
