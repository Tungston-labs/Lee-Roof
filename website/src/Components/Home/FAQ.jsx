import React, { useState } from "react";
import {
  FAQWrapper,
  FAQContent,
  FAQText,
  FAQTitle,
  FAQDesc,
  FAQList,
  FAQItem,
  QuestionRow,
  Question,
  ArrowIcon,
  Answer,
  UpgradeSection,
  UpgradeText,
  ContactButtonWrapper,
  ContactButton,
} from "./faq.style";

import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

const faqs = [
  {
    q: "Are JSW colour-coated sheets ideal for coastal, hot, or monsoon climates?",
    a: "Yes — JSW colour-coated steel sheets are engineered to withstand extreme weather conditions, making them highly suitable for coastal areas, hot climates, and heavy monsoon regions. Their corrosion resistance and durable paint finish ensure long-lasting performance even in the harshest environments."
  },
  {
    q: "Can customized lengths and colors be ordered?",
    a: "Yes—customers can order custom-cut lengths and choose from a wide palette of fade-resistant colors like blue, grey, green, and more, tailored to design needs for your new roof installation."
  },
  {
    q: "Do JSW colour-coated steel sheets help reduce roof heat build-up?",
    a: "Yes, JSW colour-coated steel sheets are designed with reflective coatings and high-quality paint finishes that can reduce roof temperatures by 3–5 °C. This helps minimize indoor heat gain, enhances thermal comfort, and can lower cooling costs over time."
  },
  {
    q: "What is the standard warranty period for JSW colour-coated sheets?",
    a: "JSW colour-coated sheets typically come with a warranty of up to 10–15 years, covering corrosion resistance and paint durability under normal usage conditions. This ensures long-lasting protection and peace of mind for your roofing investment."
  },
  {
    q: "Can solar panels be safely installed on roofing sheets?",
    a: "Yes, solar panels can be safely installed on colour-coated steel roofing sheets. These sheets are strong, durable, and designed to support additional installations like solar panels, making them a smart choice for integrating renewable energy with your roof."
  }
];

const FAQ = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <FAQWrapper>
      {/* Top FAQ Section */}
      <FAQContent>
        <FAQText>
          <FAQTitle>
            Frequently asked <br /> <span>questions</span>
          </FAQTitle>
          <FAQDesc>
            Your Guide to Informed Roofing Decisions At Lee Roofs, we recognize
            that roofing decisions matter and can often be complex. That’s why
            we’ve compiled the most commonly asked questions from homeowners,
            architects, and engineers about products, installations, warranty
            coverage, and maintenance. This FAQ section delivers clear,
            expert-backed answers so you can make informed decisions with
            confidence. Whether you’re comparing materials, exploring best
            practices for roof care, or seeking clarity on warranty terms, our
            goal is to streamline your journey and provide trustworthy guidance
            every step of the way.
          </FAQDesc>
        </FAQText>

        <FAQList>
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              $open={hoverIndex === index}
            >
              <QuestionRow>
                <Question>{item.q}</Question>
                <ArrowIcon>
                  {hoverIndex === index ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </ArrowIcon>
              </QuestionRow>
              <Answer $open={hoverIndex === index}>{item.a}</Answer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>

      {/* Bottom Upgrade Section */}
      <UpgradeSection>
        <UpgradeText>
          <h2>
            Ready to Upgrade <br /> Your Roof ?
          </h2>
          <p>
            Discover premium roofing sheets that combine durability with design.
            Reach out to our team to get expert guidance, pricing, and the best
            options for your project.
          </p>
        </UpgradeText>
        <ContactButtonWrapper>
          <ContactButton>Contact Our Team</ContactButton>
        </ContactButtonWrapper>
      </UpgradeSection>
    </FAQWrapper>
  );
};

export default FAQ;

