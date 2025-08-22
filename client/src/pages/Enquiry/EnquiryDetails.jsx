import React from "react";
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
import Navbar from "../../components/Navbar/Navbar"
import { FaArrowLeft } from "react-icons/fa";

const EnquiryPage = () => {
  const items = [
    { id: 1, name: "JSW Roofing sheets", color: "Blue", size: "254 sq ft/m²", img: "/images/sheet.webp" },
    { id: 2, name: "JSW Roofing sheets", color: "Blue", size: "254 sq ft/m²", img: "/images/sheet.webp" },
    { id: 3, name: "JSW Roofing sheets", color: "Blue", size: "254 sq ft/m²", img: "/images/sheet.webp" },
    { id: 4, name: "JSW Roofing sheets", color: "Blue", size: "254 sq ft/m²", img: "/images/sheet.webp" },
  ];

  return (
    <>
    <Navbar />
    <PageWrapper>
      {/* Header */}
      <Header>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaArrowLeft /> <Title>Enquiry</Title>
        </div>
     <StatusSelect>
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
      <Value>Ajay kumar</Value>
    </DetailItem>
    <DetailItem>
      <Label>Email ID</Label>
      <Value>Ajaykumar@gmail.com</Value>
    </DetailItem>
    <DetailItem>
      <Label>Address</Label>
      <Value>Dummy dummy</Value>
    </DetailItem>
    <DetailItem>
      <Label>Delivery location</Label>
      <Value>XXXXXXXXXX</Value>
    </DetailItem>
  </CustomerDetailsLeft>

  <CustomerDetailsRight>
    <DetailItem>
      <Label>Phone number</Label>
      <Value>6235894751</Value>
    </DetailItem>
    <DetailItem>
      <Label>Delivery location</Label>
      <Value>
        Lorem ipsum dolor sit amet consectetur. At scelerisque cras urna rhoncus erat. 
        Ipsum diam ultrices at tristique eu auctor nunc phasellus euismod.
      </Value>
    </DetailItem>
  </CustomerDetailsRight>
</CustomerCard>

      </CustomerSection>

      {/* Items */}
     <ItemsSection>
  <h3>Items in cart</h3>
  <ItemsGrid>
    {items.map(({ id, name, color, size, img }) => (
      <ItemCard key={id}>
        <ItemImage src={img} alt={name} />
        <ItemTitle>{name}</ItemTitle>
        <ItemInfo>
          <ColorBadge color={color.toLowerCase()} />
          {color}
        </ItemInfo>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <QuantityInput type="number" value={254} readOnly />
          <span>{size}</span>
        </div>
      </ItemCard>
    ))}
  </ItemsGrid>
</ItemsSection>
    </PageWrapper>
    </>
  );
};

export default EnquiryPage;
