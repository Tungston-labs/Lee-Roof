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
  font-size: 1.2rem;
  max-width: 700px;
    font-family: Helvetica;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const SaveButton = styled.button`
  background: #004D7B;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
font-size:1.2rem;
  &:hover {
    background: #0066a2;
  }
`;

export const CancelButton = styled.button`
  background: #E63946;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
font-size:1.2rem;
  &:hover {
    background: #c82333;
  }
`;
// export const UploadWrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 30px;
// `;

// export const UploadBox = styled.div`
//   border: 2px dashed #8f8f8f;
//   border-radius: 12px;
//   padding: 20px;
//   text-align: center;
//   cursor: pointer;
//   width: 30%;
//   min-height:300px;
//   margin-bottom:20px;
//   background:#EEEEEE;
//   label {
//     cursor: pointer;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 8px;
//     color: #555;
//   }
// `;

export const UploadText = styled.p`
  margin: 0;
  font-size: 0.9rem;
 
`;

// export const UploadList = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//     // background:#EEEEEE;
// `;
// export const UploadItem = styled.div`
//   display: flex;
//   align-items: center;
//   background:#EEEEEE;
//   padding: 10px 14px;
// //   border-radius: 8px;
// `;

// export const UploadImage = styled.img`
//   width: 50px;
//   height: 50px;
//   object-fit: cover;
//   border-radius: 4px;
//   margin-right: 10px;
// `;

// export const UploadInfo = styled.div`
//   flex: 1;
// `;

// export const RemoveButton = styled.button`
//   background: transparent;
//   border: none;
//   color: #c00;
//   font-size: 20px;
//   cursor: pointer;
// `;

export const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
//   max-width: 900px;
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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  background:#EEEEEE;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  height: 90px;
  font-size: 0.95rem;
    background:#EEEEEE;
`;

export const ColorPicker = styled.input`
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
`;

export const AddProductButton = styled.button`
  background: #004d7b;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #0066a2;
  }
`;
export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
//   margin-top: 10px;
`;


export const UploadWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* spreads them */
  align-items: flex-start;
  width: 100%;
`;

export const UploadSection = styled.div`
  display: flex;
  flex-direction: column; /* keep title above box */
  align-items: center; /* center its own content */
  gap: 10px;
  flex: 1;
`;


export const SectionTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const UploadBox = styled.div`
  border: 2px dashed #8f8f8f;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  cursor: pointer;
  // flex: 1;

  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #555;
        cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
  }
`;

export const UploadBoxs = styled.div`
  // border: 2px dashed #8f8f8f;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  cursor: pointer;
  // flex: 1;

  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #555;
        cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
  }
`;

export const UploadList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 15px;
`;

export const UploadItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 12px;
  background: #f8f8f8;
  width: 250px;   /* fixed width for preview card */
`;

export const UploadImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
    margin-right: 10px;
`;

export const UploadInfo = styled.div`
  flex: 1;
  font-size: 13px;
  color: #333;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  font-size: 1.2rem;
  cursor: pointer;
`;