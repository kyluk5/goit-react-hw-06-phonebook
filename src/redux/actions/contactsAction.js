import { v4 as uuidv4 } from "uuid";
import { LOCAL, ADD, DELETE, VALUE } from "../constants/contactsConst";

const readFromLocal = (arr) => ({
  type: LOCAL,
  payload: arr,
});

const addContact = (name, number) => ({
  type: ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = (e) => ({
  type: DELETE,
  payload: e.target.id,
});

const inputValue = (e) => ({
  type: VALUE,
  payload: e.target.value,
});

export default {
  readFromLocal,
  addContact,
  deleteContact,
  inputValue,
};
