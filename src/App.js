import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">⌂ Home</Link>
        <Link to="/signup">✍ Signup</Link>
        <Link to="/login">🗝 Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
