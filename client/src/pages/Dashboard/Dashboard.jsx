import React from "react";
import {
  DashboardWrapper,
  WelcomeSection,
  WelcomeTitle,
  WelcomeText,
  CardsContainer,
  Card,
  CardTitle,
  CardValue,
} from "./Dashboard.Styles";
import Navbar from "../../components/Navbar/Navbar"
import logo from "../../assets/client/logo.svg"; 
// import profileImg from "../../assets/profile.jpg"; 

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <DashboardWrapper>
      {/* Welcome Section */}
      <WelcomeSection>
        <WelcomeTitle>Welcome Back!</WelcomeTitle>
        <WelcomeText>
          Glad to have you back. Check your dashboard for the latest product
          updates and manage your enquiries seamlessly.
        </WelcomeText>
      </WelcomeSection>

      {/* Cards */}
      <CardsContainer>
        <Card>
          <CardTitle>Enquiry</CardTitle>
          <CardValue>45</CardValue>
        </Card>
        <Card>
          <CardTitle>Product</CardTitle>
          <CardValue>14</CardValue>
        </Card>
      </CardsContainer>
    </DashboardWrapper>
    </>
  );
};

export default Dashboard;
