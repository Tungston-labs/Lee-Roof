// EnquiryTable.styles.js
import styled from "styled-components";

export const TableWrapper = styled.div`
//   width: 100%;
  padding: 4rem;
  overflow-x: auto; 
`;

export const Title = styled.h2`
  color: #004d7b;
  font-size: 2rem;
  margin-bottom: 8px;
  font-family: Inter;
font-weight: 700;
font-style: Bold;
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
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-family: Helvetica;
font-weight: 400;
font-style: Regular;
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

export const Table = styled.table`
  width: 100%;
  border-collapse: separate; /* allows spacing */
  border-spacing:0 10px; /* horizontal=0, vertical=12px */
  font-size: 1rem;
`;


export const Thead = styled.thead`
//   background: #EDEDED;
`;

export const Tr = styled.tr`
  background:#F6F6F6 ;
  border-radius: 8px;
//   box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
`;

export const Th = styled.th`
  text-align: left;
  padding: 10px;
  font-weight: 600;
   background: #EDEDED;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 5px;
  font-size: 0.95rem;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({ status }) =>
    status === "Pending"
      ? "#F3ED92B2"
      : status === "Open"
      ? "#30A8EEB2"
      : "#29CFC1B2"};
  color: #333;
  border: 1px solid #8F8F8F;

  width: 100px; /* 👈 fixed width */
  text-align: center; /* 👈 centers the text */
`;


export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ deleteBtn }) => (deleteBtn ? "red" : "#004d7b")};
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    opacity: 0.7;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  gap: 8px;
`;

export const PageButton = styled.button`
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  background: ${({ active }) => (active ? "#004d7b" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    background: #004d7b;
    color: #fff;
  }
`;


