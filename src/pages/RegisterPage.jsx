import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { FormProvider } from "../context/FormProvider";
import TextInput from "../components/common/TextInput";
import PasswordInput from "../components/common/PasswordInput";
import SubmitButton from "../components/common/SubmitButton";
import { useNavigate } from 'react-router-dom';

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
      }
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
    <div className="RegisterContainer">
      <h2>Register</h2>
      <FormProvider onSubmit={handleRegister}>
        <TextInput label="username" type="text" name="username" required />
        <PasswordInput
          label="password"
          type="password"
          name="password"
          required
        />
        <PasswordInput
          label="confirm password"
          type="password"
          name="confirmPassword"
          required
        />
        <SubmitButton label="Register" />
      </FormProvider>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default RegisterPage;
