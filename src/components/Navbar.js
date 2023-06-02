import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Product</Link>
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">Cart(0)</Link>
        </MDBBtn>
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
