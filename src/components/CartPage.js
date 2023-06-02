import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  IncreaseItemQuantity,
  DecreaseItemQuantity,
} from "../features/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.allCarts);
  console.log(cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems.cart]);

  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {cartItems.cart.length} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {cartItems.cart.map((item) => {
                  return (
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                            className="w-100"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>
                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p>Color: red</p>
                        <p>Size: M</p>

                        <MDBTooltip
                          wrapperProps={{ size: "sm" }}
                          wrapperClass="me-1 mb-2"
                          title="Remove item"
                        >
                          <MDBIcon
                            onClick={() => dispatch(removeItem(item.id))}
                            fas
                            icon="trash"
                          />
                        </MDBTooltip>

                        {/* <MDBTooltip
                          wrapperProps={{ size: "sm", color: "danger" }}
                          wrapperClass="me-1 mb-2"
                          title="Move to the wish list"
                        >
                          <MDBIcon fas icon="heart" />
                        </MDBTooltip> */}
                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <MDBBtn
                            className="px-3 me-2"
                            onClick={() =>
                              dispatch(DecreaseItemQuantity(item.id))
                            }
                          >
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>

                          <MDBInput
                            // defaultValue={1}
                            value={item.quantity}
                            min={0}
                            type="number"
                            label="Quantity"
                          />

                          <MDBBtn
                            className="px-3 ms-2"
                            onClick={() =>
                              dispatch(IncreaseItemQuantity(item.id))
                            }
                          >
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>{item.price}$</strong>
                        </p>
                      </MDBCol>
                      <hr className="my-4" />
                    </MDBRow>
                  );
                })}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>{cartItems.quantity}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem> */}
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total Quantity</strong>
                    </div>
                    <span>
                      <strong>{cartItems.totalQuantity}</strong>
                    </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>{cartItems.totalPrice}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
