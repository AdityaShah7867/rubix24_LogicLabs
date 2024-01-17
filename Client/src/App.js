import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/home/Navbar'
import './App.css'
import Login from "./Pages/Auth/Login";
import StudentRegister from "./Pages/Auth/StudentRegister";
import WorkshopForm from "./Pages/WORKSHOP/WorkshopForm";
import LiveCourseForm from "./Pages/WORKSHOP/LiveCourseForm";
import CommunityHome from "./Pages/Community/CommunityHome";
import GeneralFeed from "./Pages/generalChat/generalFeed";
import FindMentor from "./components/FindMentor";
import BuyCoin from "./Pages/Coin/BuyCoin";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <Router>
      <Navbar/>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
           
        <Route path="/login" element={<Login />} />  
        <Route path="/findyourmentor" element={<FindMentor />} />  
        <Route path="/register" element={<StudentRegister />} /> 
        
        <Route path="/CommunityHome" element={<CommunityHome />} />
        <Route path="/generalFeed" element={<GeneralFeed />} /> 
        <Route path="/buycoins" element={<BuyCoin />} />


      {/* BELOW THIS ROUTE OF MENTOR  */}
        <Route path="/WorkshopForm" element={<WorkshopForm />} />   
        <Route path="/LiveCourseForm" element={<LiveCourseForm />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
