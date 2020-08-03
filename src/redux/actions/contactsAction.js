import { v4 as uuidv4 } from "uuid";
import { ADD, DELETE, FILTER, LOCAL } from "../constants/contactsConst";

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

const getFilteredContacts = (contacts, filter) => ({
  type: FILTER,
  payload: {
    contacts,
    filter,
  },
});
// ========================================

const readFromLocal = (arr) => ({
  type: LOCAL,
  payload: arr,
});

export default {
  addContact,
  deleteContact,
  getFilteredContacts,
  // =================
  readFromLocal,
};
