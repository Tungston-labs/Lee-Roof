// RoofingSolutions.style.js
import styled from "styled-components";

export const Section = styled.section`
  padding: 3rem 2rem;
  background: #F4F4F4;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;  
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #004060;
  font-family: "Raleway", sans-serif;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const IntroText = styled.p`
  max-width: 650px;
  font-size: 1.1rem;
  color: #000000;
  line-height: 1.7;
  font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    text-align: center;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  align-items: stretch;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column; /* always stack on mobile */
  }
`;

export const ImagePlaceholder = styled.div`
 flex: 1;
  min-height: 220px;
  max-height:500px;
  max-width: 500px;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #666;
`;

export const CardContent = styled.div`
  flex: 2;
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Logo = styled.div`
  margin-bottom: 0.5rem;
`;

export const LogoImage = styled.img`
  height: 35px;
  object-fit: contain;

  @media (max-width: 480px) {
    height: 28px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #000000;
  font-family: Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #000000;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-family: Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  font-family: "Raleway", sans-serif;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OptionLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #666;
`;

export const OptionValues = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const OptionValue = styled.button`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.active ? "#004D7B" : "#E9E9E9")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.active ? "#004D7B" : "#80BFE4")};
  }
`;

export const Colors = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ColorRectangle = styled.div`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 20%;
  border: 2px solid #ACACAC;
`;

export const ViewMore = styled.a`
  font-size: 0.9rem;
  font-weight: 600;
  color: #004D7B;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #006080;
  }
`;
