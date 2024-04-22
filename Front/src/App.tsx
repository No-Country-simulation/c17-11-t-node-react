import Navbar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          {/* <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
