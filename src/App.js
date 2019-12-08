import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import contacts from "../src/utils/ContactsAPI";
import createContact from "./components/createContact";
import { Route } from "react-router-dom";
import {
  NavbarPage,
  JumbotronPage,
  ContactList,
  // HomePage
  FooterPage
  // SearchPage
} from "../src/components/index";
// import { Switch } from "react-router-dom";

class App extends Component {
  state = {
    contactList: contacts
  };

  render() {
    const removeContact = contact => {
      // console.log(contact);
      this.setState(state => ({
        contactList: state.contactList.filter(c => c.id !== contact.id)
      }));
    };

    const { contactList } = this.state;
    return (
      <MDBContainer className="mt-2">
        <NavbarPage />
        <JumbotronPage />
        <Route
          exact
          path="/"
          render={() => (
            <ContactList contacts={contactList} onDelete={removeContact} />
          )}
        />
        <Route path="/create" component={createContact} />
        <FooterPage />
      </MDBContainer>
    );
  }
}

export default App;
