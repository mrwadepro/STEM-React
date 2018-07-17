import React, { Component } from "react";
import axios from "axios";

export default class video extends Component {
  onSubmit(e) {
    e.preventDefault();

    axios.get("/api/uploadVideo/test").then(() => console.log(e));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} encType="multipart/form-data">
        <div className="custom-file mb-3">
          <input
            type="file"
            name="file"
            id="file"
            className="custom-file-input"
          />
          <label htmlFor="file" className="custom-file-label">
            Choose file
          </label>
        </div>
        <input type="submit" className="btn btn-primary btn-block" />
      </form>
    );
  }
}
