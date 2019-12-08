import React, { Component } from "react";
import {
  MDBFormInline,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn
} from "mdbreact";

import SectionContainer from "./sectionContainer";
import "./Search.css";

class SearchPage extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({
      query: query.trim()
    });
  };
  render() {
    const { query } = this.state;
    // const { searchChange } = this.props;

    return (
      <MDBContainer>
        <SectionContainer header="Search Contact">
          <MDBRow>
            <MDBCol md="6">
              {JSON.stringify(query)}
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
              <MDBBtn
                block
                color="info"
                style={{ marginBottom: "0rem", marginTop: "2rem" }}
              >
                Add User &nbsp; &nbsp;
                <MDBIcon icon="user" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default SearchPage;
