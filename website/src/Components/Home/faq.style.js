import styled from "styled-components";
import bgDesktop from "../../assets/background2.png";
import bgMobile from "../../assets/backgroundMobile2.png";

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Top FAQ Section */
export const FAQContent = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 300px;
  padding: 80px 40px;
  background: #F4F4F4;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 20px;
  }
`;

export const FAQText = styled.div`
  justify-self: start;
  text-align: left;
`;

export const FAQTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 5px;
  color: #083d56;
  font-family: "Raleway", sans-serif;

  span {
    color: #0077b6;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

export const FAQDesc = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  color: #000000;
  font-family: Helvetica, Arial, sans-serif;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-self: end;
  width: 150%;
  max-width: 750px;

  @media (max-width: 768px) {
    width: 100%;
    justify-self: center;
  }
`;

export const FAQItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 18px 25px;
  background: #fff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #0077b6;
  }
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Question = styled.h3`
  font-size: 1.3rem;
  font-weight: 900;
  color: #000000;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 2.5rem;
  color: #004D7B;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Answer = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  color: #000000;
  margin-top: ${({ $open }) => ($open ? "10px" : "0")};
  max-height: ${({ $open }) => ($open ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

/* Bottom Upgrade Section */
export const UpgradeSection = styled.div`
  margin-top: 0px;
  background: url(${bgDesktop}) no-repeat center center/cover;
  padding: 200px 40px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-radius: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    background: url(${bgMobile}) no-repeat center center/cover;
    padding: 60px 20px;
  }
`;

export const UpgradeText = styled.div`
  h2 {
    font-size: 4rem;
    color: #FFFFFF;
    margin-bottom: 30px;
    font-family: "Raleway", sans-serif;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 1.5rem;
    color: #FFFFFF;
    max-width: 650px;
    font-family: Helvetica, Arial, sans-serif;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4;
      max-width: 100%;
    }
  }
`;

export const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const ContactButton = styled.button`
  background: #fff;
  color: #004D7B;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 15px 20px;
  margin-top: 200px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    background: #80BFE4;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 18px;
    margin-top: 20px;
  }
`;
