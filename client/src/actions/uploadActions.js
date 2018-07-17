import axios from "axios";
import { GET_ERRORS } from "./types";

//Login - Get User Token
export const uploadVideo = videoData => dispatch => {
  axios
    .post("/api/uploadVideo/upload", videoData)
    .then(res => {
      res.json({ res });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addKey = videoData => {
  axios.post("/api/uploadVideo/addkey", videoData).then(res => {});
};
