import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Landing from './pages/Landing';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import InsuranceDashboard from './components/InsuranceDashboard';
import AdminDashboard from './components/AdminDashboard';
import Chats from './components/Chats';
import Voice from "./components/VoiceAssistant"
const App = () => {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
      <Route path = "/voice" element = {<Voice />} />
      
         <Route path = "/" element = {<Register />} />
         <Route path = "/login" element = {<Login />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path = "/patientdashboard" element = {<PatientDashboard />} />
        <Route path = "/insurancedashboard" element = {<InsuranceDashboard />} />
        <Route path = "/admin" element = {<AdminDashboard />} />
        <Route path = "/chats" element = {<Chats />} />
    </Routes>
    
    </BrowserRouter>
 
  </div>
  )  
  
}

export default App
