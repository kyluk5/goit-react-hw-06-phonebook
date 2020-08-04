import { v4 as uuidv4 } from "uuid";
import { LOCAL, ADD, DELETE, VALUE } from "../constants/contactsConst";
import { createAction } from "@reduxjs/toolkit";

export const readFromLocal = createAction(LOCAL);
export const addContact = createAction(ADD, function (name, number) {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});
export const deleteContact = createAction(DELETE);
export const inputValue = createAction(VALUE, (e) => ({
  payload: e.target.value,
}));

// ========================================

// const readFromLocal = (arr) => ({
//   type: LOCAL,
//   payload: arr,
// });

// const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

// const deleteContact = (e) => ({
//   type: DELETE,
//   payload: e.target.id,
// });

// const inputValue = (e) => ({
//   type: VALUE,
//   payload: e.target.value,
// });

// export default {
//   readFromLocal,
//   addContact,
//   deleteContact,
//   inputValue,
// };
