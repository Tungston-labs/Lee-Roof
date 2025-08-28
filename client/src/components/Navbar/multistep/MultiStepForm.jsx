// Stepper.js
import React from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:20px;
`;

const StepCircle = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 14px;
  background-color: white;
`;

const ProgressRing = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 3px solid #004080;
  transform: rotate(${props => props.progressDeg}deg);
  transition: transform 0.3s ease;
`;

const FullRing = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #004080;
`;

const Stepper = ({ currentStep, totalSteps }) => {
  const isFinalStep = currentStep === totalSteps;
  const progressDeg = (currentStep / totalSteps) * 360;

  return (
    <StepperContainer>
      <StepCircle>
        {currentStep} of {totalSteps}
        {isFinalStep ? (
          <FullRing />
        ) : (
          <ProgressRing progressDeg={progressDeg} />
        )}
      </StepCircle>
    </StepperContainer>
  );
};

export default Stepper;
