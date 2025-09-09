import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
import Swal from "sweetalert2";

const EnquiryForm = () => {
  const location = useLocation();
  const initialItems = location.state?.items || [];
  const items = location.state?.items || [];
  const [cartItems, setCartItems] = useState(initialItems);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true); 
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
          size: item.size || item.thickness,
          img: item.image,
          quantity: item.qty,
        })),
      };

      await axios.post("http://leeroof.leebuilders.in/api/enquiries", payload);

      Swal.fire({
        icon: "success",
        title: "Enquiry Sent!",
        text: "Your enquiry was submitted successfully. We’ll contact you shortly.",
        confirmButtonColor: "#0b4177",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        location: "",
        notes: "",
      });
      setCartItems([]);
      setErrors({});
    } catch (error) {
      console.error("Error submitting enquiry:", error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again!",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false); 
    }
  };

  return (
    <PageWrapper>
      <GreyBox>
        <TopBar>
          <Heading>Enquiry Form</Heading>
        </TopBar>

        <ContentWrapper>
          {/* Left Section: Items */}
          <SectionBox>
            <SectionTitle>Items in cart</SectionTitle>
            <ItemsList>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
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
                <p>
                  Select "Proceed with enquiry" on cart page to list the
                  products here
                </p>
              )}
            </ItemsList>
          </SectionBox>

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
                    disabled={loading}
                  />
                  {errors.firstName && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {errors.firstName}
                    </span>
                  )}
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.lastName && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {errors.lastName}
                    </span>
                  )}
                </InputRow>

                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.email && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.email}
                  </span>
                )}

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.phone && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.phone}
                  </span>
                )}

                <Input
                  type="text"
                  placeholder="Delivery Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.address && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.address}
                  </span>
                )}

                <Input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.location && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.location}
                  </span>
                )}

                <TextArea
                  placeholder="Additional Notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  disabled={loading}
                />

                <SubmitButton type="submit" disabled={loading}>
                  {loading ? (
                    <span>Submitting...</span> 
                  ) : (
                    <>
                      <FaPaperPlane size={18} />
                      <span>Send</span>
                    </>
                  )}
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
