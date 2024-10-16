// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider"; // Adjust the import path as necessary

const ProtectedRoute = ({ element }) => {
  const { user } = useAuth(); // Get the user from the auth context

  // If the user is not authenticated, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the passed component
  return element;
};

export default ProtectedRoute;
