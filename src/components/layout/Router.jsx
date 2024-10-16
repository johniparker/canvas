import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/HomePage";
import Login from "../../pages/LoginPage";

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
