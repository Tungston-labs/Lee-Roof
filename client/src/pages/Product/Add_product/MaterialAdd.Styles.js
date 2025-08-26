


import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  font-family: Helvetica;
font-weight: 700;
font-style: Bold;
// font-size: 25px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
color: #004D7B;

`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #555;
  max-width: 500px;
  margin-top: 0.5rem;
  font-family: Helvetica;
font-weight: 400;
font-style: Regular;
// font-size: 22.1px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

`;

// export const StepIndicator = styled.div`
//   border: 2px solid #0077b6;
//   color: #0077b6;
//   border-radius: 50%;
//   padding: 0.3rem 0.6rem;  /* reduced padding */
//   font-size: 0.7rem;       /* smaller font */
//   font-weight: bold;
//   display: inline-flex;     /* keeps it centered */
//   align-items: center;
//   justify-content: center;
//   min-width: 24px;          /* ensures circle shape */
//   min-height: 24px;
// `;

export const MaterialSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
`;

export const AddButton = styled.button`
  background: #0077b6;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background: #f0f0f0;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    cursor: pointer;
    color: red;
    font-weight: bold;
  }
`;

export const UploadSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
background:#B3B3B3;
  `;

export const UploadBox = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  cursor: pointer;
  background: #004D7B;
  min-width: 180px;
  margin:6px;

  p {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
  color:white;

  }

  span {
    font-size: 0.8rem;
    color: #777;
  color:white;

  }
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const ImageCard = styled.div`
  position: relative;
  margin:6px;
  padding:10px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  width: 10rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto; /* Push to the right */
`;

export const CancelButton = styled.button`
  background: transparent;
  color: red;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
`;

export const SaveButton = styled.button`
  background: #004D7B;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
`;
