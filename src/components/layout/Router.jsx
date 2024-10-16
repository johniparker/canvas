import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProfilePage from "../../pages/ProfilePage";
import { useAuth } from "../../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import Announcements from "../../pages/Announcements";

const RouterProvider = () => {
  const { user } = useAuth();
  console.log("USER IN ROUTER: ", user);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
      path="/profile" 
      element={<ProtectedRoute element={<ProfilePage />} />} />
      <Route 
      path="/announcements" 
      element={<ProtectedRoute element={<Announcements />} />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RouterProvider;
