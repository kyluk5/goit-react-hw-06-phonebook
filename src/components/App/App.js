import React, { Component } from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/actions/contactsAction";
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

  contactName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  contactNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number, value } = this.state;
    if (this.props.contacts.find((item) => item.name === this.state.name)) {
      this.toggle(value);
      return;
    }

    this.props.addNewContact(name, number);

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
      this.props.readFromLocalStorage(JSON.parse(writedContacts));
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
          contactName={this.contactName}
          number={number}
          contactNumber={this.contactNumber}
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
  addNewContact: contactsActions.addContact,
  readFromLocalStorage: contactsActions.readFromLocal,
  deleteEachContact: contactsActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
