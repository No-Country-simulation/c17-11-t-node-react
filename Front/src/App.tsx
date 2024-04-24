import Navbar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthProvider } from "./services/Api";
import { Profile } from "./pages/profile/Profile";
import { Login } from "./pages/login/Login";
import Register from "./pages/register/Register";

// const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
//   element,
// }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? element : <Navigate to="/#" />;
// };

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />

            {/*  />
          <Route path="/register" element={<Register />} />
            */}
            {/* <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
