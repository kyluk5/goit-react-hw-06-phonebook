import React, { Component } from "react";
import { connect } from "react-redux";
import { readFromLocal, addContact } from "../../redux/actions/contactsAction";
import PfoneForm from "../PhoneForm/PhoneForm";
import FindContact from "../FindContact/FindContact";
import { CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    number: "",
    value: false,
  };

  contactInputValue = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number, value } = this.state;
    if (this.props.contacts.find((item) => item.name === this.state.name)) {
      this.toggle(value);
      return;
    }

    this.props.addContact(name, number);

    this.setState({
      name: "",
      number: "",
    });
  };

  toggle = (status) => {
    this.setState({
      value: !status,
    });
  };

  componentDidMount() {
    const writedContacts = localStorage.getItem("contacts");
    if (writedContacts) {
      this.props.readFromLocal(JSON.parse(writedContacts));
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
    }
  }

  render() {
    const { name, number, value } = this.state;
    const test = () => {
      this.toggle(true);
    };

    return (
      <>
        <CSSTransition
          in={value}
          classNames="alert"
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <button
            className="alert"
            onClick={test}
          >{`${name} alredy exist`}</button>
        </CSSTransition>

        <PfoneForm
          submitForm={this.submitForm}
          name={name}
          contactInputValue={this.contactInputValue}
          number={number}
        />
        <FindContact />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  addContact,
  readFromLocal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
