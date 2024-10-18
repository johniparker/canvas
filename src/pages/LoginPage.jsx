import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FormProvider } from "../context/FormProvider";
import TextInput from "../components/common/TextInput";
import PasswordInput from "../components/common/PasswordInput";
import SubmitButton from "../components/common/SubmitButton";
import RedirectButton from "../components/common/RedirectButton";

const LoginPage = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    console.log('FORM DATA: ', formData);
    try {
      // Call the login function from the context
      const success = await login(formData);

      if (!success) {
        setError("Invalid username or password");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <FormProvider onSubmit={handleLogin}>
        <TextInput label="username" name="username" required />
        <PasswordInput
          label="password"
          name="password"
          required
        />
        {error && <p className="error">{error}</p>}
        <SubmitButton label="Login" />
      </FormProvider>
      <RedirectButton path="/register" label="New here? Register" />
    </div>
  );
};

export default LoginPage;
