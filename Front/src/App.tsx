import Navbar from "./components/NavBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Index from "./pages/index/Index";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthProvider, useAuth } from "./services/Api";
import { Profile } from "./pages/profile/Profile";
import { Login } from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Loader } from "./components/Loader";

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
  element,
}) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
            <Route path="/auth/google/callback" element={<Loader />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
