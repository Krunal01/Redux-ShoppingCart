import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

export default function Navbar() {
  const { totalQuantity, cart } = useSelector((state) => state.allCarts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Product</Link>
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">Cart({totalQuantity})</Link>
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
