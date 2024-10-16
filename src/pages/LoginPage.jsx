import { useState } from "react";
import { useAuth } from "../context/AuthProvider"; // Import useAuth hook
import { useNavigate } from "react-router-dom";
import TextInput from "../components/common/TextInput";
import PasswordInput from "../components/common/PasswordInput";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the login function from the context
      const success = await login(username, password);

      if (!success) {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <TextInput
          id="username"
          label="username"
          value={username}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <PasswordInput
          id="password"
          label="password"
          value={password}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegisterRedirect}>New here? Register</button>
    </div>
  );
};

export default LoginPage;
