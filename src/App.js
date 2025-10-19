import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/LoginComponent/Login";
import Signup from "./components/SignupComponent/Signup";
import Home from "./components/HomeComponent/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
        path="*"
        element={
          <div
          style={{
                textAlign: "center",
                marginTop: "100px",
                fontSize: "24px",
                color: "#ff4444",
              }}
              >
          404 - No Route Found</div>
        }
         />
      </Routes>
    </Router>
  );
}

export default App;
