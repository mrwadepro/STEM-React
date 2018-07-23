import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_VIDEOS,
  SET_VIDEO
} from "./types";

//Login - Get User Token
export const uploadVideo = videoData => dispatch => {
  console.log(videoData);

  axios
    .post("/api/uploadVideo/upload", videoData)
    .then(res => {
      dispatch({
        type: SET_VIDEO,
        payload: videoData
      });

      //res.json({ msg: "Success" });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getVideos = () => dispatch => {
  axios
    .get("/api/uploadVideo/getvideos")
    .then(res => {
      dispatch({
        type: GET_VIDEOS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_VIDEOS,
        payload: {}
      });
    });
};
