import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/home/Navbar'
import './App.css'
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />      
        <Route path="/login" element={<Login />} />  
        <Route path="/register" element={<Register />} />      
        
      </Routes>
    </Router>
  );
}

export default App;
