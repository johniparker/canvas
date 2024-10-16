// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider"; // Import the useAuth hook

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from context

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/announcements">Announcements</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
