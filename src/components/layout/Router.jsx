import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProfilePage from "../../pages/ProfilePage";
import { useAuth } from "../../context/AuthProvider";

const RouterProvider = () => {
  const { user } = useAuth();
  console.log("USER IN ROUTER: ", user);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route
        path="/profile"
        element={user ? <ProfilePage /> : <Navigate to="/login" replace />}
      /> */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RouterProvider;
