import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
   padding: 4rem;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #004d7b;
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

export const Description = styled.p`
  max-width: 700px;
  color: #404040;
  margin-top: 4px;
    font-size: 1.2rem;
      font-family: Helvetica;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'cancel'
      ? css`
          background: #e63946;
          color: white;

          &:hover {
            background: #c82333;
          }
        `
      : css`
          background: #004d7b;
          color: white;

          &:hover {
            background: #0066a2;
          }
        `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const ImagePreview = styled.img`
  width: 40%;
  object-fit: contain;
  background: #f5f5f5;
  border-radius: 10px;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UploadArea = styled.div`
  display: flex;
  gap: 20px;
`;

export const UploadBox = styled.div`
  border: 2px dashed #8f8f8f;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  width: 200px;
  background: #eeeeee;

  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #555;
  }
`;

export const UploadList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UploadItem = styled.div`
  display: flex;
  align-items: center;
  background: #eeeeee;
  padding: 10px 14px;
  border-radius: 8px;
`;

export const UploadImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

export const UploadInfo = styled.div`
  flex: 1;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #c00;
  font-size: 20px;
  cursor: pointer;
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
 
`;

export const Input = styled.input`
//   width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  background: #eeeeee;
`;

export const Textarea = styled.textarea`
//   width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  height: 80px;
  font-size: 0.95rem;
  background: #eeeeee;
`;

export const ColorPicker = styled.input`
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
`;

export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
