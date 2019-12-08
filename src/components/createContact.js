import React from "react";
import PropTypes from "prop-types";
// import { SectionContainer } from "./index";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBInputGroup
} from "mdbreact";
function createContact(props) {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h5 text-center mb-4">Create Contact</p>
                <div className="grey-text">
                  <MDBInput
                    label="Type your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your phone number"
                    icon="phone"
                    group
                    type="text"
                    validate
                  />
                  <MDBInput
                    label="Type your location"
                    icon="home"
                    group
                    type="text"
                    validate
                  />
                  <MDBInputGroup
                    containerClassName="mb-3"
                    prepend={
                      <MDBBtn
                        color="mdb-color"
                        outline
                        size="md"
                        className="m-0 px-3 py-2 z-depth-0"
                      >
                        Gender
                      </MDBBtn>
                    }
                    inputs={
                      <select className="browser-default custom-select">
                        <option value="0">Choose...</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    }
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-indigo">
                    Create <MDBIcon icon="paper-plane" className="ml-2" />
                  </button>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
createContact.propTypes = {};

export default createContact;
