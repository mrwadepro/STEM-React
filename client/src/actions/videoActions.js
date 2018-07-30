import axios from "axios";
import {
  GET_ERRORS,
  GET_VIDEOS,
  ADD_VIDEO,
  VIDEO_LOADING,
  GET_VIDEO
} from "./types";

//Add Video
export const uploadVideo = videoData => dispatch => {
  console.log(videoData);

  axios
    .post("/api/videos/upload", videoData)
    .then(res => {
      dispatch({
        type: ADD_VIDEO,
        payload: res.data
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
// Get video by id
export const getVideoById = id => dispatch => {
  dispatch(setVideoLoading());
  axios
    .get(`/api/videos/video/${id}`)
    .then(res =>
      dispatch({
        type: GET_VIDEO,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_VIDEO,
        payload: null
      });
    });
};
export const getVideos = () => dispatch => {
  dispatch(setVideoLoading());
  axios
    .get("/api/videos/getvideos")
    .then(res => {
      dispatch({
        type: GET_VIDEOS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_VIDEOS,
        payload: null
      });
    });
};
export const setVideoLoading = () => {
  return {
    type: VIDEO_LOADING
  };
};
