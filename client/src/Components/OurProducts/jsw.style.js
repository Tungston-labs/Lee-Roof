import styled from "styled-components";

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
  height: auto;
`;

export const BrandPillText = styled.span`
  font-weight: 900;
  font-size: 3rem;
  color: #004d7b;
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
  background: #f2f2f2;
  border-radius: 14px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.03), 0 6px 18px rgba(0, 0, 0, 0.08);
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
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 550px;
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
  color: #3c3c3c;
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
  background: ${({ active }) => (active ? "#004d7b" : "#fff")};
  color: ${({ active }) => (active ? "#f4f4f4" : "#000000")};
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.15s ease;

  &:hover {
    border-color: #80bfe4;
    color: ${({ active }) => (active ? "#80bfe4" : "#1374c2")};
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

export const AddToCartButton = styled.button`
  background: #004d7b;
  color: #fff;
  border: none;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
  transition: background 0.2s ease;

  &:hover {
    background: #0066a1;
  }
`;
