// EnquiryForm.jsx
import React from "react";
import {
  PageWrapper,
  TopBar,
  Heading,
  GreyBox,
  ContentWrapper,
  SectionBox,
  SectionTitle,
  ItemsList,
  ItemCard,
  ItemImageSpace,
  ItemDetails,
  ColorRow,
  ColorBox,
  FormWrapper,
  FormTitle,
  FormDesc,
  Form,
  Input,
  TextArea,
  SubmitButton,
  InputRow,
} from "./EnquiryForm.style";

import { FaPaperPlane } from "react-icons/fa";

const EnquiryForm = ({ items = [] }) => {
  return (
    <PageWrapper>
     
      {/* Grey Box overlapping the blue and white background */}
      <GreyBox>

       <TopBar>
        <Heading>Enquiry Form</Heading>
      </TopBar>

        <ContentWrapper>
          {/* Left Section: Items in cart */}
          <SectionBox>
            <SectionTitle>Items in cart</SectionTitle>
            <ItemsList>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <ItemCard key={index}>
                    <ItemImageSpace>
                      <img src={item.image} alt={item.name} />
                    </ItemImageSpace>
                    <ItemDetails>
                      <h4>{item.name}</h4>
                      <ColorRow>
                        <ColorBox style={{ backgroundColor: item.color }} />
                        <span>{item.colorName}</span>
                      </ColorRow>
                      <p>{item.size} sq ft/m²</p>
                    </ItemDetails>
                  </ItemCard>
                ))
              ) : (
                <p>No items in cart.</p>
              )}
            </ItemsList>
          </SectionBox>

          {/* Right Section: Form */}
          <SectionBox>
            <FormWrapper>
              <FormTitle>Fill the Form for More Enquiry</FormTitle>
              <FormDesc>
                Your selections are safely stored in your cart with the latest
                price updates. Complete your purchase now to avoid missing out
                due to stock or rate changes for your premium roofing sheets
              </FormDesc>
              <Form>
                <InputRow>
                  <Input type="text" placeholder="First Name" />
                  <Input type="text" placeholder="Last Name" />
                </InputRow>
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
                <Input type="text" placeholder="Delivery Location" />
                <TextArea placeholder="Additional Notes" />
                <SubmitButton type="submit">
                  <FaPaperPlane size={18} />
                  <span>Send</span>
                </SubmitButton>
              </Form>
            </FormWrapper>
          </SectionBox>
        </ContentWrapper>
      </GreyBox>
    </PageWrapper>
  );
};

export default EnquiryForm;
