import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import About from './components/About';
import DustbinCard from './components/DustbinCard';
import DustbinData from './components/DustbinData';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="home-page"><Home /></div>} />
        <Route path="/login" element={<div className="login-page"><Login /></div>} />
        <Route path="/signup" element={<div className="signup-page"><Signup /></div>} />
        <Route path="/aboutus" element={<div className="about-page"><About /></div>} />
        <Route path="/dashboard" element={<div className="dashboard-page"><Dashboard /></div>} />
        <Route path="/dustbincard" element={<div><DustbinCard /></div>} />
        <Route path="/dustbindata" element={<div><DustbinData /></div>} />
        <Route path="/aboutus-dashboard" element={<div className="about-page"><Aboutus /></div>} />


      </Routes>
    </Router>
  );
}

export default App;