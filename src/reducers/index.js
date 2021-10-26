import { combineReducers } from "redux";

import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  posts: postReducer,
  users: userReducer,
  loggedInUser: authReducer,
});
