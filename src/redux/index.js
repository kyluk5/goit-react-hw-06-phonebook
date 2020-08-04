import { combineReducers } from "redux";
import { items, filter } from "./reducers/contactsReducer";

export default combineReducers({
  items,
  filter,
});
