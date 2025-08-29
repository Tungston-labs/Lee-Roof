// Cart.jsx
import React from "react";
import {
  CartWrapper,
  CartTitle,
  CartDescription,
  EmptyCart,
  EmptyCartImage,
  EmptyCartText,
  EmptyCartButton,
  ContinueShopping,
  CartItems,
  CartItem,
  ProductImage,
  ProductDetails,
  ProductText,
  QuantityBox,
  RemoveButton,
  EnquiryButton,
  ActionsWrapper,
} from "./Cart.style";
import { updateQty } from "../../redux/cartSlice";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
import emptyCartImg from "../../assets/empty-cart.png";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <CartWrapper>
      <CartTitle>Your Cart</CartTitle>
      <CartDescription>
        Your selections are safely stored in your cart with the latest price
        updates. Complete your purchase now to avoid missing out due to stock or
        rate changes for your premium roofing sheets.
      </CartDescription>

      {cartItems.length === 0 ? (
        // ---------------- Empty Cart ----------------
        <EmptyCart>
          <EmptyCartImage src={emptyCartImg} alt="Empty Cart" />
          <EmptyCartText>Your Cart is Empty</EmptyCartText>
          <p>Looks like you haven’t added any items yet.</p>
          <EmptyCartButton>Cart is empty</EmptyCartButton>
          <ContinueShopping href="/products">
            <BsArrowReturnLeft
              style={{ color: "#004D7B", marginRight: "6px" }}
            />
            Continue Shopping
          </ContinueShopping>
        </EmptyCart>
      ) : (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.uniqueId}>
              <RemoveButton
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "This item will be removed from your cart.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, remove it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(removeFromCart(item.uniqueId));
                      Swal.fire(
                        "Removed!",
                        "The item has been removed.",
                        "success"
                      );
                    }
                  });
                }}
              >
                <FaTrashAlt />
              </RemoveButton>

              <ProductImage src={item.image} alt={item.name} />

              <ProductDetails>
                <ProductText>
                  <strong>{item.name}</strong>
                  <br />
                  {item.description}
                  <br />
                  <span>
                    <strong>Material:</strong> {item.material} |{" "}
                    <strong>Thickness:</strong> {item.thickness} |{" "}
                    <strong>Color:</strong> {item.color}
                  </span>
                </ProductText>
              </ProductDetails>

              <QuantityBox
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) =>
                  dispatch(
                    updateQty({
                      uniqueId: item.uniqueId,
                      qty: parseInt(e.target.value),
                    })
                  )
                }
              />
            </CartItem>
          ))}

          <ActionsWrapper>
            <EnquiryButton
              onClick={() =>
                navigate("/contact", { state: { items: cartItems } })
              }
            >
              Proceed with Enquiry
            </EnquiryButton>
            <ContinueShopping href="/products">
              ← Continue Shopping
            </ContinueShopping>
          </ActionsWrapper>
        </CartItems>
      )}
    </CartWrapper>
  );
};

export default Cart;
