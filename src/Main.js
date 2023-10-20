import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Navbar/Home';
import Navbar from './Navbar/Navbar';
import Javascript from './Navbar/Javascript';
import Css from './Navbar/Css';
import Html from './Navbar/Html';
import './Main.css';
import Registration from './Registration';

function Main() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/Javascript" element={<Javascript />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
