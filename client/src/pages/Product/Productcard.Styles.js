import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  padding: 4rem;
`;


export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;

  p {
    color: #404040;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0;
      font-family: Helvetica;
  }
`;



export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #F1F1F1;
//   border-radius: 10px;
box-shadow: 0px 0px 24px 0px #00000040;

`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100%;
//   max-width: 300px;
  height: auto;
//   border-radius: 10px;
`;

export const InfoSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 80px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #004d7b;
  margin-bottom: 10px;
`;

export const ProductDesc = styled.p`
  color: #333;
  font-size: 0.95rem;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h4`
  font-size: 1rem;
  color: #222;
  margin: 12px 0 8px;
`;

export const OptionsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const OptionButton = styled.button`
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: ${({ selected }) => (selected ? '#004D7B' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    background: ${({ selected }) => (selected ? '#003a5c' : '#f1f1f1')};
  }
`;

export const ColorSwatch = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 2px solid ${({ selected }) => (selected ? '#004D7B' : '#ccc')};
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
      justify-content: flex-end;
      margin-bottom:10px;
`;

export const ActionButton = styled.button`
  padding: 10px 18px;
  font-size: 0.95rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'delete'
      ? css`
          background: #e63946;
          color: white;

          &:hover {
            background: #c82333;
          }
        `
      : css`
          background: #004D7B;
          color: white;

          &:hover {
            background: #0066a2;
          }
        `}
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
