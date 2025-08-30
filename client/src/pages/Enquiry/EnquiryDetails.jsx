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
} from "./EnquiryDetails.Styles";
import Navbar from "../../components/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EnquiryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusUpdating, setStatusUpdating] = useState(false);

  // Fetch enquiry by ID
  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/enquiries/${id}`);
        setEnquiry(res.data);
      } catch (err) {
        console.error("Error fetching enquiry:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiry();
  }, [id]);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    if (!newStatus) return;

    try {
      setStatusUpdating(true);
      const res = await axios.patch(
        `http://localhost:5000/api/enquiries/${id}/status`,
        { status: newStatus }
      );
      setEnquiry(res.data.enquiry); // Update the UI immediately
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status. Try again.");
    } finally {
      setStatusUpdating(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <PageWrapper>
          <p>Loading enquiry...</p>
        </PageWrapper>
      </>
    );
  }

  if (!enquiry) {
    return (
      <>
        <Navbar />
        <PageWrapper>
          <p>Enquiry not found.</p>
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
          <StatusSelect
            value={enquiry.status}
            onChange={handleStatusChange}
            disabled={statusUpdating}
          >
            <option value="">Select a status</option>
            <option value="Pending">Pending</option>
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
