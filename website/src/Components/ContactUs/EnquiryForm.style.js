// EnquiryForm.style.js
import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #004D7B 40%, #ffffff 40%);
`;

export const TopBar = styled.div`
  padding: 10px 0;
  text-align: center;
`;

export const Heading = styled.h2`
  color: #004D7B;
  font-size: 36px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  margin: 10;
`;

export const GreyBox = styled.div`
  background: #EBEBEB;
  margin: -10px auto 40px auto; /* overlaps blue & white */
  padding: 40px 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  max-width: 1400px;
  width: 90%;
  z-index: 20;
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SectionBox = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 6px;
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: #004d7b;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ItemCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  background: #fff;
`;

export const ItemImageSpace = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #555;
    font-family: "Raleway", sans-serif;
  }

  span {
    font-size: 14px;
    color: #0b4177;
  }
`;

export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #0b4177;
  font-family: "Raleway", sans-serif;
`;

export const FormDesc = styled.p`
  font-size: 16px;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  background: #0b4177;
  color: #fff;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: #08365a;
  }
`;
