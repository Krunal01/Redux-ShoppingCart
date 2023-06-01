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

export default function ProductCard() {
  return (
    <div className="m-4">
      <MDBContainer>
        <MDBRow className="m-1">
          <MDBCol size="4">
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>Some quick example text.</MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
