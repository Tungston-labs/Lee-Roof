import styled from "styled-components";

export const AboutWrapper = styled.div`
  position: relative;
  height: 100vh; /* Full screen height */
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire container */
  z-index: -2;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay for text visibility */
  z-index: -1;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center;     /* Center horizontally */
  text-align: center;
  padding: 0 20px;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 20px;
   font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  max-width: 1000px;
  line-height: 1.5;
  font-family: Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
