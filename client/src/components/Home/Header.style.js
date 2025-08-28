import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 1rem;
  max-width: 900px;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const SubHeading = styled.p`
font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  color: #444;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.bg}); /* ✅ dynamic image */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end; /* ✅ places card on right side */
  align-items: flex-end;
  padding: 2rem;
`;

export const InfoCard = styled.div`
  position: relative;
  background: #fff;
  border-radius: 20px;
  border-top-right-radius: 80px;
  padding: 1.1rem;   /* ⬅ reduced from 2rem */
  margin: 4rem;      /* ⬅ smaller outer margin */
  max-width: 420px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  max-width: 580px;
  height: 190px;   
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  background: #004060;
  color: #fff;
  font-size: 1.5rem;
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 1000;
  color: #000;
  margin-bottom: 1rem;
  font-family: 'Holtwood One SC', serif;
`;

export const InfoText = styled.p`
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 3.5rem; /* ✅ extra bottom space so button doesn't overlap text */
  font-family: Helvetica, Arial, sans-serif;
`;

export const EnquireButton = styled.button`
  position: absolute;
  bottom: -15px;  /* ✅ overlaps bottom */
  right: 20px;    /* ✅ sticks to right side */
  background: #004060;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: 0.3s ease-in-out;

  &:hover {
    background: #006080;
  }
`;
