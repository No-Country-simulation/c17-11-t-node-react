import Navbar from "./components/NavBar";
import IndexView from "./views/IndexView/IndexView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexView />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          {/* <Route
              path="/dashboard"
              element={<ProtectedRoute element={<DashboardView />} />}
            /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
