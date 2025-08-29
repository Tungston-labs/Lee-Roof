import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // install if not added: npm install axios
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

const EnquiryForm = () => {
  const location = useLocation();
  const items = location.state?.items || [];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        location: formData.location,
        notes: formData.notes,
        items: items.map((item) => ({
          name: item.name,
          color: item.color,
          size: item.size || item.thickness, // adapt based on your schema
          img: item.image,
          quantity: item.qty,
        })),
      };

      const res = await axios.post(
        "http://localhost:5000/api/enquiries",
        payload
      );

      alert("Enquiry submitted successfully!");
      console.log("Saved enquiry:", res.data);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Something went wrong, please try again!");
    }
  };

  return (
    <PageWrapper>
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
                        <span>{item.color}</span>
                      </ColorRow>
                      <p>
                        <strong>Material:</strong> {item.material} |{" "}
                        <strong>Thickness:</strong> {item.thickness}
                      </p>
                      <p>Qty: {item.qty}</p>
                    </ItemDetails>
                  </ItemCard>
                ))
              ) : (
                <p
                  style={{
                    color: "#eb0f0fff",
                    fontSize: "24px", 
                    fontWeight: "bold", 
                    textAlign: "center",
                    marginTop: "1em",
                  }}
                >
                  Select "Proceed with enquiry" on cart page to list the
                  products here
                </p>
              )}
            </ItemsList>
          </SectionBox>

          {/* Right Section: Form */}
          <SectionBox>
            <FormWrapper>
              <FormTitle>Fill the Form for More Enquiry</FormTitle>
              <FormDesc>
                Your selections are safely stored in your cart. Submit your
                details and we’ll get back to you quickly.
              </FormDesc>
              <Form onSubmit={handleSubmit}>
                <InputRow>
                  <Input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </InputRow>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Delivery Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <TextArea
                  placeholder="Additional Notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
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
