import { combineReducers } from "redux";
import { ADD } from "../constants/contactsConst";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    default:
      return state;
  }
};

const filter = (state = "", action) => state;

export default combineReducers({
  items,
  filter,
});
