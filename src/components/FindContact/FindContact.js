import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import "../FindContact/FindContact.css";
import contactsAction from "../../redux/actions/contactsAction";

const FindContact = ({ filter, contacts, filterValue, deleteContact }) => {
  // const filterValue = (e) => {
  //   filter === e.target.value;
  // };

  const getFilteredContacts = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {getFilteredContacts().length > 1 && (
        <div className="search-container">
          {/* <h3>Contacts</h3> */}
          <span>Find contacts by name</span>
          <br></br>
          <input type="text" onChange={filterValue}></input>
        </div>
      )}
      <div className="search_info">
        <TransitionGroup component="ul" className="contact_list">
          {getFilteredContacts().map((item) => (
            <CSSTransition key={item.id} classNames="list__item" timeout={800}>
              <li className="contact_item" key={item.id}>
                {item.name} : {item.number}
                <button
                  className="delete_btn"
                  type="button"
                  id={item.id}
                  onClick={deleteContact}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  filterValue: contactsAction.inputValue,
  deleteContact: contactsAction.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContact);

FindContact.propTypes = {
  filterValue: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
