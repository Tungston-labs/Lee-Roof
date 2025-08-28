import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 12px;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-width: 250px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-width: 120px;
`;

export const ColorInput = styled.input`
  width: 40px;
  height: 36px;
  border: none;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 14px;
  border: none;
  background-color: #004D7B;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #083a56;
  }
`;

export const AddVariantButton = styled(Button)`
  margin-top: 16px;
  width: 200px;
  border-radius: 6px;
  font-weight: bold;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between; /* pushes span left & buttons right */
  align-items: center; /* keeps everything vertically aligned */
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #444;
  font-family: Helvetica;
font-weight: 400;
font-style: Regular;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

`;