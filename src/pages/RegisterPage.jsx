import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { FormProvider } from "../context/FormProvider";
import TextInput from "../components/common/TextInput";
import PasswordInput from "../components/common/PasswordInput";
import SubmitButton from "../components/common/SubmitButton";
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Alert } from "@mui/material";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const newUser = {
        username: formData.username,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };
      console.log("NEW USER: ", newUser);
      const result = await register(newUser);
      console.log('RESULT: ', result);
      if (!result.success) {
        setError(result.error);
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4, backgroundColor: "#121212" }}>
      <Box 
        sx={{ 
          padding: 3, 
          borderRadius: 2, 
          boxShadow: 3, 
          backgroundColor: "#1E1E1E", 
          color: "#FFFFFF" 
        }}>
        <Typography variant="h4" gutterBottom align="center">
          Register
        </Typography>
        <FormProvider onSubmit={handleRegister}>
          <TextInput 
            label="Username" 
            type="text" 
            name="username" 
            required 
            inputProps={{ style: { backgroundColor: "#2C2C2C", color: "#FFFFFF" } }} // Input styling
          />
          <PasswordInput 
            label="Password" 
            type="password" 
            name="password" 
            required 
            inputProps={{ style: { backgroundColor: "#2C2C2C", color: "#FFFFFF" } }} // Input styling
          />
          <PasswordInput 
            label="Confirm Password" 
            type="password" 
            name="confirmPassword" 
            required 
            inputProps={{ style: { backgroundColor: "#2C2C2C", color: "#FFFFFF" } }} // Input styling
          />
          {error && (
            <Alert severity="error" sx={{ marginTop: 2, backgroundColor: "#D32F2F", color: "#FFFFFF" }}>
              {error}
            </Alert>
          )}
          <SubmitButton label="Register" />
        </FormProvider>
      </Box>
    </Container>
  );
};

export default RegisterPage;
