import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TextInput from "../components/common/TextInput";
import PasswordInput from "../components/common/PasswordInput";
import Button from "../components/common/Button";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await register(username, password, confirmPassword);
      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <TextInput
        id="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <PasswordInput
          id="password"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <PasswordInput
          id="confirmPassword"
          label="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
          required
        />
      {error && <div className="error-message">{error}</div>}
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterPage;
