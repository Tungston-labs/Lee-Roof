import React, { useState } from 'react';
import {
  CardWrapper,
  ImageSection,
  InfoSection,
  ProductImage,
  ProductTitle,
  ProductDesc,
  SectionTitle,
  OptionsRow,
  OptionButton,
  ColorSwatch,
  ButtonGroup,
  ActionButton,
  Logo,
  HeaderRow,
  BackButton, PageWrapper, Title, TitleWrapper 
} from './Productcard.Styles';

import logo from '../../assets/client/jsw.svg';
import productImg from '../../assets/client/dummy.svg'; 
import Navbar from '../../components/Navbar/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
  const [material, setMaterial] = useState('GI');
  const [thickness, setThickness] = useState('0.35 mm');
  const [color, setColor] = useState('Blue');
const navigate = useNavigate();
  return (
    <>
    <Navbar/>
        <PageWrapper>
     <TitleWrapper>
    <BackButton onClick={() => navigate(-1)}>
      <FaArrowLeft />
    </BackButton>
    <Title>Product</Title>
  </TitleWrapper>
      <HeaderRow>
  <p>
    Easily add new products to your store with images, pricing, descriptions, and stock
    details, keeping your listings updated for customers.
  </p>
  <ButtonGroup>
    <ActionButton variant="delete">Delete</ActionButton>
   <ActionButton variant="edit" onClick={() => navigate('/edit-product')}>
  Edit
</ActionButton>
  </ButtonGroup>
</HeaderRow>


      <CardWrapper>
        <ImageSection>
          <ProductImage src={productImg} alt="Product" />
        </ImageSection>

        <InfoSection>
          <Logo src={logo} alt="Logo" />
          <ProductTitle>JSW Roofing Sheets</ProductTitle>
          <ProductDesc>
            Made from high-tensile pure steel and featuring an Al-Zn (Galvalume) anti-corrosion
            layer, JSW roofing sheets offer up to 4% greater rust resistance, even in coastal or
            humid environments like Kochi, Kerala. Engineered with superior UV-resistant paint
            technology, JSW Colouron+ retains its vibrant, crack- and peel-resistant finish year
            after year, providing durable roofing solutions.
          </ProductDesc>

          <SectionTitle>Material</SectionTitle>
          <OptionsRow>
            {['GI', 'Al-Zn'].map((item) => (
              <OptionButton
                key={item}
                selected={material === item}
                onClick={() => setMaterial(item)}
              >
                {item}
              </OptionButton>
            ))}
          </OptionsRow>

          <SectionTitle>Thickness</SectionTitle>
          <OptionsRow>
            {['0.35 mm', '0.40 mm', '0.45 mm'].map((item) => (
              <OptionButton
                key={item}
                selected={thickness === item}
                onClick={() => setThickness(item)}
              >
                {item}
              </OptionButton>
            ))}
          </OptionsRow>

          <SectionTitle>Color</SectionTitle>
          <OptionsRow>
            {[
              { name: 'White', hex: '#ffffff' },
              { name: 'Blue', hex: '#004D7B' },
              { name: 'Green', hex: '#17866c' }
            ].map(({ name, hex }) => (
              <ColorSwatch
                key={name}
                color={hex}
                selected={color === name}
                onClick={() => setColor(name)}
              />
            ))}
          </OptionsRow>

         
        </InfoSection>
      </CardWrapper>
      </PageWrapper>
    </>
  );
};

export default ProductCard;
