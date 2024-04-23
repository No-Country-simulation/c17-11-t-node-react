import Navbar from "./components/NavBar";

import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
// import { Register } from "./pages/Register";
import IndexView from "./views/IndexView/IndexView";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<IndexView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
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
