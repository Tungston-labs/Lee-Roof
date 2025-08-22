import React, { useState } from 'react';
import {
  PageWrapper,
  TopBar,
  Title,
  Description,
  ButtonGroup,
  ActionButton,
  ContentWrapper,
  ImagePreview,
  RightColumn,
  UploadArea,
  UploadBox,
  UploadList,
  UploadItem,
  UploadImage,
  UploadInfo,
  RemoveButton,
  Form,
  InputGroup,
  Label,
  Input,
  Textarea,
  ColorPicker,
  ColorRow,
  BackButton
} from './EditProduct.Styles';
import { FaUpload } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { TitleWrapper } from './ViewProduct.Styles';
import { useNavigate } from 'react-router-dom';
const ProductForm = () => {
  const [files, setFiles] = useState([]);
const navigate = useNavigate();
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const filePreviews = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setFiles((prev) => [...prev, ...filePreviews]);
  };

  const removeFile = (index) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  return (
    <>
    <Navbar/>
  
    <PageWrapper>
      <TopBar>
        <div>
        <TitleWrapper>
  <BackButton onClick={() => navigate(-1)}>
    <FaArrowLeft />
  </BackButton>
  <Title>Product</Title>
</TitleWrapper>

          <Description>
            Easily add new products to your store with images, pricing, descriptions, and stock
            details, keeping your listings updated for customers.
          </Description>
        </div>
        <ButtonGroup>
          <ActionButton variant="cancel">Cancel</ActionButton>
          <ActionButton variant="save">Save</ActionButton>
        </ButtonGroup>
      </TopBar>

      <ContentWrapper>
        <ImagePreview src="/images/sheet.webp" alt="product" /> 

        <RightColumn>
          <UploadArea>
            <UploadBox>
              <label htmlFor="file-upload">
                <FaUpload size={24} color="#004D7B" />
                <p>
                  Click to upload or Drag and Drop <br />
                  Max 10 MB file size. Only .png file
                </p>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/png"
                multiple
                hidden
                onChange={handleFileChange}
              />
            </UploadBox>

            <UploadList>
              {files.map((item, index) => (
                <UploadItem key={index}>
                  <UploadImage src={item.preview} alt={item.file.name} />
                  <UploadInfo>
                    {item.file.name} {(item.file.size / 1024 / 1024).toFixed(1)} MB
                  </UploadInfo>
                  <RemoveButton onClick={() => removeFile(index)}>×</RemoveButton>
                </UploadItem>
              ))}
            </UploadList>
          </UploadArea>

          <Form>
            <InputGroup>
              <Label>Product name</Label>
              <Input placeholder="Product name" />
            </InputGroup>

            <InputGroup>
              <Label>Thickness</Label>
              <Input placeholder="Thickness" />
            </InputGroup>

            <InputGroup>
              <Label>Product color</Label>
              <ColorRow>
                <Input placeholder="Product Colour" />
                <ColorPicker type="color" />
              </ColorRow>
            </InputGroup>

            <InputGroup>
              <Label>Description</Label>
              <Textarea placeholder="Description" />
            </InputGroup>

            <InputGroup style={{ gridColumn: 'span 1', marginTop:"-80px"}}>
              <Label>Material</Label>
              <Input placeholder="Material" />
            </InputGroup>
          </Form>
        </RightColumn>
      </ContentWrapper>
    </PageWrapper>
      </>
  );
};

export default ProductForm;
