import { GET_VIDEOS, SET_VIDEO } from "../actions/types";
const initialState = {
  videos: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO:
      return {
        ...state,
        videos: action.payload,
        loading: false
      };
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
