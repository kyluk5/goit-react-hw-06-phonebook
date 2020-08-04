import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  readFromLocal,
  addContact,
  deleteContact,
  inputValue,
} from "../actions/contactsAction";

const items = createReducer([], {
  [readFromLocal]: (state, { payload }) => payload,
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [inputValue]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  items,
  filter,
});
// =========================================
// import { combineReducers } from "redux";
// import { ADD, DELETE, LOCAL, VALUE } from "../constants/contactsConst";

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case LOCAL:
//       return payload;
//     case DELETE:
//       return state.filter((contact) => contact.id !== payload.target.id);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case VALUE:
//       return (state = payload.target.value);
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
