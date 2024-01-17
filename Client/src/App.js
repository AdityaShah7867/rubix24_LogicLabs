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
import MLogin from "./Pages/Auth/MLogin";
import MentorRegister from "./Pages/Auth/MentorRegister";

function App() {
  return (
    <Router>
      <Navbar/>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
           
        <Route path="/student/login" element={<Login />} />  
        <Route path="/student/findyourmentor" element={<FindMentor />} />  
        <Route path="/student/register" element={<StudentRegister />} /> 
        
        <Route path="/CommunityHome" element={<CommunityHome />} />
        <Route path="/generalFeed" element={<GeneralFeed />} /> 
        <Route path="/buycoins" element={<BuyCoin />} />


        <Route path="/mentor/workshopform" element={<WorkshopForm />} />   
        <Route path="/mentor/livecourseform" element={<LiveCourseForm />} /> 
        <Route path="/mentor/login" element={<MLogin />} />
        <Route path="/mentor/register" element={<MentorRegister />} />
        
      </Routes>
    </Router>
  );
}

export default App;
