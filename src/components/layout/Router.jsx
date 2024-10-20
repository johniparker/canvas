import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProfilePage from "../../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import Announcements from "../../pages/Announcements";
import EditAnnouncement from "../../pages/EditAnnouncement";
import Pages from "../../pages/Pages";
import EditPage from "../../pages/EditPage";
import Modules from "../../pages/Modules";
import EditModule from "../../pages/EditModule";

const RouterProvider = () => {
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
      <Route 
      path="/announcement-edit" 
      element={<ProtectedRoute element={<EditAnnouncement />} />} />
      <Route 
      path="/pages" 
      element={<ProtectedRoute element={<Pages />} />} />
      <Route 
      path="/page-edit" 
      element={<ProtectedRoute element={<EditPage />} />} />
      <Route path="/" element={<HomePage />} />
      <Route 
      path="/modules" 
      element={<ProtectedRoute element={<Modules />} />} />
      <Route 
      path="/module-edit/:moduleId?" 
      element={<ProtectedRoute element={<EditModule />} />} />
    </Routes>
  );
};

export default RouterProvider;
