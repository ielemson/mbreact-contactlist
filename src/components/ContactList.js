import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import Search from "./SearchPage";
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCardImage,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  // MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBFormInline,
  MDBAlert
  // MDBBtn
} from "mdbreact";

import { SectionContainer } from "./index";

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({
      query: query.trim()
    });
  };
  clearQuery = () => {
    this.setState({ query: "" });
  };
  render() {
    const { query } = this.state;

    const { contacts, onDelete } = this.props;
    let showingContacts;
    if (query) {
      //if there is any spevial char in our query ... escape it using the RegExp Package
      // the i ignores the case of the input
      const matchQuery = new RegExp(escapeRegExp(query), "i");
      showingContacts = contacts.filter(contact =>
        matchQuery.test(contact.name)
      );
    } else {
      showingContacts = contacts;
    }
    showingContacts.sort(sortBy("name"));
    return (
      <MDBContainer>
        {/* SEARCH PAGE */}
        <SectionContainer header="Search Contact">
          {/* <Search /> */}
          <MDBRow>
            <MDBCol md="6">
              {/* {JSON.stringify(query)} */}
              <MDBFormInline className="md-form">
                <MDBIcon icon="search" />
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search contact"
                  aria-label="Search"
                  value={query}
                  onChange={event => this.updateQuery(event.target.value)}
                />
              </MDBFormInline>
            </MDBCol>
            <MDBCol md="6">
              <Link to="/create">
                <MDBBtn
                  block
                  color="info"
                  style={{ marginBottom: "0rem", marginTop: "2rem" }}
                >
                  Add User &nbsp; &nbsp;
                  <MDBIcon icon="user" />
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
          {showingContacts.length !== contacts.length && (
            <section style={{ textAlign: "center" }}>
              <MDBAlert color="info">
                Showing {showingContacts.length} of {contacts.length}
                <a href="#!" className="alert-link" onClick={this.clearQuery}>
                  &nbsp; &nbsp; Clear Search Field
                </a>
              </MDBAlert>
            </section>
          )}
        </SectionContainer>
        {/* SEARCH PAGE */}
        {contacts ? (
          <>
            {showingContacts.map((contact, index) => (
              <SectionContainer key={index}>
                <MDBCard>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="2" sm="12">
                        <MDBCardImage
                          className="img-fluid img-thumbnail"
                          src={contact.avatarURL}
                          waves
                          style={{ width: "auto", height: "auto" }}
                        />
                      </MDBCol>
                      <MDBCol md="8" sm="8">
                        <MDBCardText
                          style={{
                            paddingTop: "5px",
                            fontSize: "1rem",
                            lineHeight: "2.3rem",
                            textAlign: "justify"
                          }}
                        >
                          {" "}
                          <strong> Name:</strong>
                          {contact.name}
                          <br />
                          <strong>Email: </strong>
                          {contact.email} <br />
                          <strong>Location:</strong> {contact.location}
                          <br />
                          <strong>Phone: </strong>
                          {contact.phone}
                          <br />
                          <strong> Gender: </strong>
                          {contact.gender}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBBtn
                          color="danger"
                          size="sm"
                          onClick={() => {
                            onDelete(contact);
                          }}
                        >
                          {" "}
                          Delete &nbsp;&nbsp;
                          <MDBIcon icon="trash" className="danger-text mr-2" />
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </SectionContainer>
            ))}
          </>
        ) : (
          "No Contact Available"
        )}
      </MDBContainer>
    );
  }
}

export default ContactList;
