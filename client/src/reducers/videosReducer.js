import {
  GET_VIDEOS,
  ADD_VIDEO,
  VIDEO_LOADING,
  GET_VIDEO
} from "../actions/types";
const initialState = {
  videos: null,
  video: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIDEO_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_VIDEO:
      return {
        ...state,
        video: [action.payload, ...state.videos],
        loading: false
      };
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      };
    case GET_VIDEO:
      return {
        ...state,
        video: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
