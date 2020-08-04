import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./PhoneForm.css";

const PhoneForm = ({ submitForm, name, contactInputValue, number }) => {
  const [result, setResult] = useState(false);

  useEffect(() => {
    setResult(true);
  }, []);

  return (
    <>
      <CSSTransition in={result} classNames="title" timeout={500} mountOnEnter>
        <h2 className="title">Phonebook</h2>
      </CSSTransition>

      <form className="form" onSubmit={submitForm}>
        <span>Name</span>
        <br></br>
        <input
          className="input_name"
          type="text"
          name="name"
          value={name}
          onChange={contactInputValue}
        ></input>
        <br></br>
        <span>Number</span>
        <br></br>
        <input
          className="input_number"
          type="text"
          name="number"
          value={number}
          onChange={contactInputValue}
        ></input>
        <br></br>
        <button className="submit_btn" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default PhoneForm;

PhoneForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  contactInputValue: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};
