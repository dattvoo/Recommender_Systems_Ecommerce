import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer
});

export default rootReducer;
