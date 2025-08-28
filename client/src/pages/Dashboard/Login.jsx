import React from "react";
import { LoginWrapper, LoginContainer, Logo, Form, Label, Input, Button } from "./Login.styles";
import logo from "../../assets/client/logo.svg";
import api from "../../utils/api"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/admin/login", {
        username,
        password,
      });
      const token = response.data.accessToken;
      localStorage.setItem("accessToken", token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <LoginWrapper>
      <LoginContainer>
        <Logo src={logo} alt="Company Logo" />
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username"    value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />

          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password"value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

          <Button type="submit">Login</Button>
        </Form>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Login;
