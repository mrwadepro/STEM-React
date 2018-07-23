import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { log } from "util";

const NetflixTile = ({ videos }) => {
  console.log("In tile " + JSON.stringify(videos));
  if (videos.length != 0) {
    for (let i = 0; videos.length > i; i++) {
      return (
        <div className="row__inner">
          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                id="thumbnail"
                src="this.state.penis"
                alt=""
              />
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1>
          You have not yet uploaded any STEM content. Go to your dashboard page
          and click Upload to add to this library.
        </h1>
      </div>
    );
  }
};

export default NetflixTile;
