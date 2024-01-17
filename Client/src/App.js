import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/home/Navbar'
import './App.css'
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Auth/Login";
import StudentRegister from "./Pages/Auth/StudentRegister";
import WorkshopForm from "./Pages/WORKSHOP/WorkshopForm";
import LiveCourseForm from "./Pages/WORKSHOP/LiveCourseForm";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />      
        <Route path="/login" element={<Login />} />  
        <Route path="/StudentRegister" element={<StudentRegister />} /> 
        <Route path="/WorkshopForm" element={<WorkshopForm />} />   
        <Route path="/LiveCourseForm" element={<LiveCourseForm />} /> 
         
        
      </Routes>
    </Router>
  );
}

export default App;
