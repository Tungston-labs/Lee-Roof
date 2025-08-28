import styled from "styled-components";

export const SectionWrapper = styled.div`
 
  padding: 60px 10%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: #004D7B; /* Dark blue for headings */
  margin-bottom: 20px;
  font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #000000;
  font-family: Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 650px;
    border-radius: 8px;
    object-fit: cover;
   
  }
`;

export const FinalHeading = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #111;
  margin-top: 40px;
  font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
