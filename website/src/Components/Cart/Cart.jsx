// Cart.jsx
import React, { useState } from "react";
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

import { BsArrowReturnLeft } from "react-icons/bs";


import { FaTrashAlt } from "react-icons/fa";
import emptyCartImg from "../../assets/empty-cart.png"; // ✅ only empty cart image remains

const Cart = () => {
    // Dummy state (replace with backend/cart context later)
    const [cartItems, setCartItems] = useState([
        // Example backend-like data
        // {
        //   id: 1,
        //   name: "Premium Roofing Sheet",
        //   description: "Durable sheet with weather protection",
        //   qty: 2,
        //   image: "https://your-backend.com/uploads/sheet1.png",
        // },
    ]);

    // Remove item
    const handleRemove = (index) => {
        const updated = [...cartItems];
        updated.splice(index, 1);
        setCartItems(updated);
    };

    return (
        <CartWrapper>
            <CartTitle>Your Cart</CartTitle>
            <CartDescription>
                Your selections are safely stored in your cart with the latest price
                updates. Complete your purchase now to avoid missing out due to stock
                or rate changes for your premium roofing sheets.
            </CartDescription>

            {cartItems.length === 0 ? (
                // ---------------- Empty Cart ----------------
                <EmptyCart>
                    <EmptyCartImage src={emptyCartImg} alt="Empty Cart" />
                    <EmptyCartText>Your Cart is Empty</EmptyCartText>
                    <p>Looks like you haven’t added any items yet.</p>
                    <EmptyCartButton>Cart is empty</EmptyCartButton>
                    <ContinueShopping href="/products">
                        <BsArrowReturnLeft style={{ color: "#004D7B", marginRight: "6px" }} />
                        Continue Shopping
                    </ContinueShopping>

                </EmptyCart>
            ) : (
                // ---------------- Filled Cart ----------------
                <CartItems>
                    {cartItems.map((item, index) => (
                        <CartItem key={item.id || index}>
                            <RemoveButton onClick={() => handleRemove(index)}>
                                <FaTrashAlt />
                            </RemoveButton>

                            {/* ✅ Product image now comes from backend */}
                            <ProductImage src={item.image} alt={item.name} />

                            <ProductDetails>
                                <ProductText>
                                    <strong>{item.name}</strong>
                                    <br />
                                    {item.description}
                                </ProductText>
                            </ProductDetails>

                            <QuantityBox type="number" min="1" value={item.qty} readOnly />
                        </CartItem>
                    ))}

                    <ActionsWrapper>
                        <EnquiryButton>Proceed with Enquiry</EnquiryButton>
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
