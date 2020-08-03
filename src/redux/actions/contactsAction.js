import { v4 as uuidv4 } from "uuid";
import { LOCAL, ADD, DELETE, FILTER } from "../constants/contactsConst";

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

// ========================================
const getFilteredContacts = (contacts, filter) => ({
  type: FILTER,
  payload: {
    contacts,
    filter,
  },
});

export default {
  readFromLocal,
  addContact,
  deleteContact,
  // =================
  getFilteredContacts,
};
