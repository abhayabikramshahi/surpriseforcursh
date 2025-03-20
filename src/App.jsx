// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Response from "./components/Response";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/response" element={<Response />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
