import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
export default function ProductCard() {
  const items = useSelector((state) => state.allCarts.items);
  console.log(items);
  const dispatch = useDispatch();
  return (
    <div className="m-4">
      <MDBContainer>
        <MDBRow className="m-1">
          {items.map((item) => {
            return (
              <MDBCol size="md">
                <MDBCard key={item.id}>
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                    position="top"
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardText>{item.price}$</MDBCardText>
                    <MDBBtn onClick={() => dispatch(addToCart(item))}>
                      Add to Cart
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
