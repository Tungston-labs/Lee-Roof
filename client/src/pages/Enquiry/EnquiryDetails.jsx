import React, { useEffect, useState } from "react";
import {
  PageWrapper,
  Header,
  Title,
  Subtitle,
  StatusSelect,
  CustomerSection,
  CustomerCard,
  CustomerDetails,
  DetailItem,
  ItemsSection,
  ItemsGrid,
  ItemCard,
  ItemImage,
  ItemTitle,
  ItemInfo,
  ColorBadge,
  CustomerDetailsLeft,
  CustomerDetailsRight,
  Label,
  Value,
  QuantityInput,
} from "./EnquiryDetails.Styles";
import Navbar from "../../components/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EnquiryPage = () => {
  const { id } = useParams(); // get enquiry id from route
  const navigate = useNavigate();
  const [enquiry, setEnquiry] = useState(null);

  // Fetch enquiry by ID
  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/enquiries/${id}`);
        setEnquiry(res.data);
      } catch (err) {
        console.error("Error fetching enquiry:", err);
      }
    };
    fetchEnquiry();
  }, [id]);

  if (!enquiry) {
    return (
      <>
        <Navbar />
        <PageWrapper>
          <p>Loading enquiry...</p>
        </PageWrapper>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <Header>
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> <Title>Enquiry</Title>
          </div>
          <StatusSelect defaultValue={enquiry.status}>
            <option value="">Select a status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </StatusSelect>
        </Header>

        <Subtitle>
          Welcome back! Manage your products and handle customer enquiries with ease.
        </Subtitle>

        {/* Customer Details */}
        <CustomerSection>
          <h3>Customer Details</h3>
          <CustomerCard>
            <CustomerDetailsLeft>
              <DetailItem>
                <Label>Name</Label>
                <Value>{enquiry.name}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Email ID</Label>
                <Value>{enquiry.email}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Address</Label>
                <Value>{enquiry.address}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Delivery location</Label>
                <Value>{enquiry.location}</Value>
              </DetailItem>
            </CustomerDetailsLeft>

            <CustomerDetailsRight>
              <DetailItem>
                <Label>Phone number</Label>
                <Value>{enquiry.phone}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Status</Label>
                <Value>{enquiry.status}</Value>
              </DetailItem>
            </CustomerDetailsRight>
          </CustomerCard>
        </CustomerSection>

        {/* Items */}
        <ItemsSection>
          <h3>Items in cart</h3>
          <ItemsGrid>
            {enquiry.items && enquiry.items.length > 0 ? (
              enquiry.items.map((item) => (
                <ItemCard key={item._id}>
                  <ItemImage src={item.img} alt={item.name} />
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemInfo>
                    <ColorBadge color={item.color.toLowerCase()} />
                    {item.color}
                  </ItemInfo>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  </div>
                </ItemCard>
              ))
            ) : (
              <p>No items in this enquiry.</p>
            )}
          </ItemsGrid>
        </ItemsSection>
      </PageWrapper>
    </>
  );
};

export default EnquiryPage;
