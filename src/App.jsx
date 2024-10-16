import { BrowserRouter as Router } from "react-router-dom";
import RouterProvider from "./components/layout/Router";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </Router>
  );
}

export default App;
