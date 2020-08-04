// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./reducers/contactsReducer";
import index from "./index";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: index,
  },
});

export default store;
