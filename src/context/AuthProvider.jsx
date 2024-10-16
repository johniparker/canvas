import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "../api";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const usersApi = useApi("users");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
      setUser(loggedUser);
      setAuthenticated(true);
      console.log("user logged in!", loggedUser);
    } else if (
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/"
    ) {
      navigate("/login");
    }
    setLoading(false);
  }, [navigate, location.pathname]);

  const login = async (username, password) => {
    setLoading(true);
    const user = await usersApi.getByField("username", username);
    console.log("Fetched user:", user);
    if (user && user.password === password) {
      console.log("Logging in user:", user);
      setUser(user);
      setAuthenticated(true);
      localStorage.setItem("loggedUser", JSON.stringify(user));
      navigate("/");
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const register = async (username, password, confirmPassword) => {
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      return { success: false, error: "passwords do not match" };
    }

    const existingUser = await usersApi.getByField("username", username);
    if (existingUser) {
      setLoading(false);
      return { success: false, error: "username already exists" };
    }

    const newUser = { username, password };
    const createdUser = await usersApi.create(newUser);

    if (createdUser) {
      setUser(createdUser);
      setAuthenticated(true);
      localStorage.setItem("loggedUser", JSON.stringify(createdUser));
      navigate("/");
      setLoading(false);
      return { success: true };
    }

    setLoading(false);
    return { success: false, error: "registration failed" };
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  const updateUser = async (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    await usersApi.update(updatedUser.id, updatedUser);
    setUser(updatedUser);
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
