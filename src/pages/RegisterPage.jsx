import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TextInput from "../components/common/TextInput";

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
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
