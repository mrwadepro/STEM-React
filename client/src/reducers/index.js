import { combineReducers } from "../../../../../Library/Caches/typescript/2.9/node_modules/redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import videosReducer from "./videosReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  videos: videosReducer
});
