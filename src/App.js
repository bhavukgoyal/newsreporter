import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './News.js';
import About from './About.js'
import Home from './Home.js'
import {Link} from 'react-router-dom';

const App = () => {

  const navStyle = {
    backgroundColor: '#333',
    overflow: 'hidden',
  };
  
  const linkStyle = {
    padding: '14px 20px',
    color: 'white',
    textDecoration: 'none',
  };
  return (
    <Router basename="/newsreporter">
    <div style={navStyle}>
    <Link to="/home" style={linkStyle}>Home</Link>
    <Link to="/latest-news" style={linkStyle}>Latest News</Link>
    <Link to="#" style={linkStyle}>Course</Link>
    <Link to="/about" style={linkStyle}>About</Link>
  </div>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/latest-news" element={<News />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Router>
  );
}

export default App;