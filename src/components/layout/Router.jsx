import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProfilePage from "../../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import AnnouncementList from "../../pages/AnnouncementList";
import AnnouncementEdit from "../../pages/AnnouncementEdit";

import Pages from "../../pages/Pages";

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
      element={<ProtectedRoute element={<AnnouncementList />} />} />
      <Route 
      path="/announcement-edit" 
      element={<ProtectedRoute element={<AnnouncementEdit />} />} />
      <Route 
      path="/pages" 
      element={<ProtectedRoute element={<Pages />} />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RouterProvider;
