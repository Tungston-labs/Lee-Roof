import styled from "styled-components";
import leelogin from "../../assets/client/leelogin.svg";

export const LoginWrapper = styled.div`
  position: relative;
  background: url(${leelogin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex; 
  justify-content: center;  /* horizontal center */
  align-items: center;      /* vertical center */

  @media (max-width: 1024px) {
    background-size: cover;
    background-position: top center;
  }
`;

export const LoginContainer = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 2rem;               
  width: 20%;
  max-width: 90%;              
  height: 42vh;                
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;      
  align-items: center;         
`;

export const Logo = styled.img`
  width: 95%;
  margin-bottom: 1.5rem;
  align-self: center;          
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 0.5rem 0 0.2rem;
  font-size: 14px;
  font-weight: 500;
  color: #1F58B1;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;
export const Button = styled.button`
  padding: 0.75rem;
  background-color: #1A5A80;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

