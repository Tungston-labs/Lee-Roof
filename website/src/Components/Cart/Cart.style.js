import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 30px 6%;
  background: #f8f9fa;
  min-height: 100vh;
`;

export const CartTitle = styled.h1`
  font-size: 56px;
  font-weight: bold;
  color: #004D7B;
   font-family: "Raleway", sans-serif;
`;

export const CartDescription = styled.p`
  margin-top: 8px;
  color: #000000;
  font-size: 25px;
  max-width: 1000px;
 font-family: Helvetica, Arial, sans-serif;
`;

/* Empty Cart */
export const EmptyCart = styled.div`
  margin-top: 30px;
  background: #fff;
  padding: 40px;
  border-radius: 6px;
  text-align: center;
`;

export const EmptyCartImage = styled.img`
  height: 190px;
  margin-bottom: 20px;
`;

export const EmptyCartText = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: Helvetica, Arial, sans-serif;
`;

export const EmptyCartButton = styled.button`
  background: #dae6ff;
  border: 1px solid #004080;
  color: #004D7B;
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 6px;
  cursor: default;
  font-family: Helvetica, Arial, sans-serif;
`;

export const ContinueShopping = styled.a`
  display: block;
  margin-top: 15px;
  color: #004080;
  text-decoration: none;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

/* Filled Cart */
export const CartItems = styled.div`
  margin-top: 30px;
  background: #fff;
  padding: 20px;
  border-radius: 6px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 15px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  margin-right: 20px;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

export const ProductDetails = styled.div`
  flex: 1;
`;

export const ProductText = styled.p`
  font-size: 15px;
  color: #333;
`;

export const QuantityBox = styled.input`
  width: 80px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const EnquiryButton = styled.button`
  background: #004080;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #002d5c;
  }
`;
