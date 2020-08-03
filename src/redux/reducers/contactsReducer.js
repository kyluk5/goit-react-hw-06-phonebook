import { combineReducers } from "redux";
import { ADD, DELETE, LOCAL } from "../constants/contactsConst";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case LOCAL:
      return payload;
    case DELETE:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
