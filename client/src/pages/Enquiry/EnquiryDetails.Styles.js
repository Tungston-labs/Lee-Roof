import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 4rem;
  font-family: Inter, Helvetica, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Title = styled.h2`
  color: #004d7b;
  font-size: 2rem;
  margin: 0;
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  // font-size: 35.1px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

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
  color: #404040;
  margin: 10px 0 20px 0;
  font-size: 1.2rem;
  font-family: Helvetica;
  font-weight: 400;
  font-style: Regular;
  // font-size: 25.1px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  /* Mobile (large) */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const StatusSelect = styled.select`
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  outline: none;
  background: white;

  option[value="Open"] {
    background: #30a8ee;
    font-weight: bold;
  }
  option[value="Closed"] {
    background: #29cfc1;
    font-weight: bold;
  }
`;

export const CustomerSection = styled.section`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #004d7b;
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    // font-size: 25.1px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const CustomerCard = styled.div`
  background: #004d7b;
  color: white;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CustomerDetailsLeft = styled.div`
  flex: 0 0 20%;
  min-width: 300px;
`;

export const CustomerDetailsRight = styled.div`
  flex: 1; /* take remaining space */
  min-width: 300px;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column; /* stack label above value */
  margin-bottom: 20px;
`;

export const Label = styled.span`
  //   font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 4px;
  font-family: Helvetica;
  font-weight: 400;
  font-style: Regular;
  // font-size: 18px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: #dedede;
`;

export const Value = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  font-family: Helvetica;
  font-weight: 400;
  font-style: Regular;
  // font-size: 18px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: white;
`;

// export const DetailItem = styled.p`
//   margin: 6px 0;
//   font-size: 0.95rem;
// `;

export const ItemsSection = styled.section`
  margin-top: 20px;

  h3 {
    margin-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #004d7b;
  }
`;

export const ItemsGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
`;

export const ColorBadge = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => (color === "blue" ? "blue" : "gray")};
`;

export const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;
export const ItemCard = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  // max-width: 300px;
  width: fit-content;
  padding: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  height: 200px;
   width: 200px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ItemTitle = styled.h4`
  font-size: 1rem;
  margin: 8px 0;
  font-weight: 600;
  color: #222;
`;

export const ItemInfo = styled.p`
  font-size: 0.9rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 6px 0;
`;

export const ColorPill = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({ color }) => (color === "blue" ? "#004dff" : "#888")};
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  font-size: 0.9rem;
  color: #333;
`;

export const QuantityInput = styled.input`
  width: 50px;
  padding: 4px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: white;
  font-size: 0.9rem;
`;
