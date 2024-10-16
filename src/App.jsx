import { BrowserRouter as Router } from "react-router-dom";
import RouterProvider from "./components/layout/Router";
import { AuthProvider } from "./context/AuthProvider";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <RouterProvider />
      </AuthProvider>
    </Router>
  );
}

export default App;
