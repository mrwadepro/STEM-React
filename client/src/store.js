import {
  createStore,
  applyMiddleware,
  compose
} from "../../../../Library/Caches/typescript/2.9/node_modules/redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
