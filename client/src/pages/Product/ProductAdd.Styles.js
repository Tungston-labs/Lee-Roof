import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  font-family: sans-serif;
`;

export const UploadContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const UploadBox = styled.div`
  flex: 1;
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  position: relative;
  label {
    cursor: pointer;
    display: block;
  }
`;

export const UploadPreview = styled.div`
  position: relative;
  margin-top: 10px;
  img {
    width: 100%;
    max-height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const UploadInfo = styled.div`
  margin-top: 4px;
  font-size: 12px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  border: none;
  background: #ff4d4f;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const ColorPicker = styled.input``;
