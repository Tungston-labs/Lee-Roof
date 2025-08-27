import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  align-items: start;
`;

export const UploadSection = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
font-family: Helvetica;
font-weight: 400;
font-style: Regular;
// font-size: 22px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

`;

export const UploadBox = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  cursor: pointer;
  background: #fafafa;

  p {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
  }

  span {
    font-size: 0.8rem;
    color: #777;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 98%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  background: #f5f5f5;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  background: #f5f5f5;
`;

export const Textarea = styled.textarea`
  width: 98%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  min-height: 80px;
  background: #f5f5f5;
  resize: vertical;
`;
export const Header = styled.div`
  // display: flex;
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