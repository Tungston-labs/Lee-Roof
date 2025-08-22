import styled from "styled-components";

export const DashboardWrapper = styled.div`
  font-family: Arial, sans-serif;
  background: #fff;
padding:2.5rem;
//   min-height: 100vh;
`;

/* Welcome Section */
export const WelcomeSection = styled.div`
  background: #EBEBEB;
  padding: 30px;
  margin: 25px;
  border-radius: 5px;
`;

export const WelcomeTitle = styled.h2`
  color: #004D7B;
  margin: 0 0 8px 0;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2rem; /* Default (desktop) */
  line-height: 1.2;
  letter-spacing: 0;

  /* Tablets */
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  /* Mobile (large) */
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;


export const WelcomeText = styled.p`
  margin: 0;
  color: #404040;
  font-family: "Helvetica", sans-serif;
  font-weight: 400;
  font-size: 1.2rem; /* Default (desktop) */
  line-height: 1.5;
  letter-spacing: 0;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  /* Mobile (large) */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;


/* Cards */
/* Cards */
export const CardsContainer = styled.div`
  display: flex;
//   flex-wrap: wrap; 
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  background: #004a75;
  color: #fff;
  border-radius: 20px;
  opacity: 1;

  /* Base design */
  flex: 1 1 calc(50% - 20px); /* 2 cards per row with gap */
  min-width: 280px; /* ensures they don’t shrink too much */
  height: 241px;
  padding: 27px 37px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Tablet */
  @media (max-width: 1024px) {
    flex: 1 1 100%; /* full width on medium screens */
    height: auto; 
    padding: 20px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex: 1 1 100%; /* single column */
    height: auto;
  }
`;


export const CardTitle = styled.h3`
  margin: 0;
  font-family: "Helvetica", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem; /* Default desktop */
  line-height: 1.2;
  letter-spacing: 0;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.3;
    // text-align: center; 
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`;

export const CardValue = styled.span`
  font-weight: bold;
  font-size: 1.8rem; /* Default desktop */
  align-self: flex-end;
  margin-top: auto; 

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
