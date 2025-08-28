// Ourproducts.style.js
import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  background: #f2f4f7;
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 20px auto;
`;

export const Title = styled.h2`
  font-size: 5rem; /* bigger */
  font-weight: 800;
  margin-bottom: 14px;
  margin-top: 10px;
  color: #004D7B;
`;

export const IntroText = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;
  color: #000000;
  margin: 0 auto;
`;

export const BrandPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  background: #eef1f5;
  border-radius: 999px;
  padding: 30px 36px;
  margin: 18px 0 10px 0;
  box-shadow: inset 0 0 0 1px #e5e9ef;
`;

export const BrandPillLogo = styled.img`
  width: 46px;
  height: 360;
`;

export const BrandPillText = styled.span`
  font-weight: 900;
  font-size: 3rem;
  color: #004D7B;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  gap: 38px;
  align-items: center;
  background: #F2F2F2;
  border-radius: 14px;
  box-shadow:
    0 2px 0 rgba(0, 0, 0, 0.03),
    0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 24px;
  border: 1px solid #00000040;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 400px;
  
`;

export const ProductImage = styled.img`
  width: 100%;
  min-height: 350px; 
  background: #f8fafc; 
  border-radius: 8px;
`;

export const CardContent = styled.div`
  flex: 2;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

export const Logo = styled.div`
  width: 120px;
  flex-shrink: 0;
`;

export const LogoImage = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 2rem; 
  font-weight: 800;
  color: #000000;
`;

export const CardDescription = styled.p`
  margin: 10px 0 16px 0;
  color: #3C3C3C;
  line-height: 1.6;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
`;

export const OptionGroup = styled.div``;

export const OptionLabel = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: #00000080;
  font-family: Helvetica, Arial, sans-serif;
`;

export const OptionValues = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const OptionValue = styled.button`
  padding: 6px 12px;
  border: 1px solid ${({ active }) => (active ? "#1374c2" : "#d4d9e1")};
  background: ${({ active }) => (active ? "#004D7B" : "#fff")};
  color: ${({ active }) => (active ? "#F4F4F4" : "#000000")};
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.15s ease;

  &:hover {
    border-color: #80BFE4;
    color: ${({ active }) => (active ? "#80BFE4" : "#1374c2")};
  }
`;

export const Colors = styled.div`
  display: flex;
  gap: 10px;
  margin: 6px 0 8px 0;
`;

export const ColorRectangle = styled.div`
  width: 28px;
  height: 20px;
  border: 1px solid #cfd6df;
  border-radius: 4px;
`;

export const ViewMore = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: 0.92rem;
  color: #004D7B;
  cursor: pointer;
  font-weight: 700;
   font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterNote = styled.p`
  max-width: 1300px;
  margin: 36px auto 0 auto;
  color: #000000;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.6;
  padding: 18px 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;
export const AddToCartBtn = styled.button`
  margin-top: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #004D7B;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #1374c2;
  }
`;
