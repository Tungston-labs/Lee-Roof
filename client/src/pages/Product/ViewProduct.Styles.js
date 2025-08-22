import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 4rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #004D7B;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #0066a2;
  }
`;

export const Title = styled.h2`
color: #004D7B;
  margin: 0 0 8px 0;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2rem; /* Default (desktop) */
  line-height: 1.2;
  letter-spacing: 0;

  /* Tablets */
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  /* Mobile (large) */
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;


export const Subtitle = styled.p`
  margin: 0 0 20px 0;
  color: #404040;
  font-family: Helvetica, sans-serif;
  font-size: 1.2rem;
  max-width: 700px;
  font-family: Helvetica;
font-weight: 400;
font-style: Regular;
// font-size: 25.1px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px; /* spacing between icon & text */
  background-color: #004d7b;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #006699;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const ProductCard = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
`;

export const QuantityInput = styled.input`
  width: 50px;
  padding: 4px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
`;
