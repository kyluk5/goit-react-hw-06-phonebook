import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import contactsActions from "../../redux/actions/contactsAction";
import PfoneForm from "../PhoneForm/PhoneForm";
import FindContact from "../FindContact/FindContact";
import { CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  state = {
    // contacts: [],
    filter: "",
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

  filterValue = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter } = this.state;
    return this.props.contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number, value } = this.state;
    if (this.props.contacts.find((item) => item.name === this.state.name)) {
      this.toggle(value);
      return;
    }
    console.log(this.props);
    this.props.addNewContact(name, number);
    // const object = {
    //   name: name,
    //   number: number,
    //   id: uuidv4(),
    // };
    // this.setState((prev) => ({
    //   contacts: [...prev.contacts, object],
    //   filter: "",
    //   name: "",
    //   number: "",
    // }));
  };

  componentDidMount() {
    const writedContacts = localStorage.getItem("contacts");
    if (writedContacts) {
      this.setState({
        contacts: JSON.parse(writedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.contacts !== this.props.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  toggle = (status) => {
    this.setState({
      value: !status,
    });
  };

  render() {
    const filtered = this.getFilteredContacts();
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
        <FindContact
          filtered={filtered}
          filterValue={this.filterValue}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  addNewContact: contactsActions.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
