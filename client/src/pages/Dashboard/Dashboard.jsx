import React, { useEffect, useState } from "react";
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
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Dashboard = () => {
  const [counts, setCounts] = useState({ enquiryCount: 0, productCount: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/count");
        setCounts(res.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

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
            <CardValue>{counts.enquiryCount}</CardValue>
          </Card>
          <Card>
            <CardTitle>Product</CardTitle>
            <CardValue>{counts.productCount}</CardValue>
          </Card>
        </CardsContainer>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
