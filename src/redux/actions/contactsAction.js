import { v4 as uuidv4 } from "uuid";
import { ADD, DELETE, FILTER } from "../constants/contactsConst";

const addContact = (name, number) => ({
  type: ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = (contactId) => ({
  type: DELETE,
  payload: {
    contactId,
  },
});

const getFilteredContacts = (contacts, filter) => ({
  type: FILTER,
  payload: {
    contacts,
    filter,
  },
});

export default {
  addContact,
  deleteContact,
  getFilteredContacts,
};
