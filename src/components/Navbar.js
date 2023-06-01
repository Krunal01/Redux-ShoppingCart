import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Navbar() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>All Product</span>
        <MDBBtn color="dark">Cart(0)</MDBBtn>
        {/* <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
          <input
          className="form-control"
          placeholder="Type query"
          aria-label="Search"
          type="Search"
          />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup> */}
      </MDBContainer>
    </MDBNavbar>
  );
}
