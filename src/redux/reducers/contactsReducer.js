import { combineReducers } from "redux";
import { ADD, LOCAL } from "../constants/contactsConst";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case LOCAL:
      return payload;
    default:
      return state;
  }
};

const filter = (state = "", action) => state;

export default combineReducers({
  items,
  filter,
});
