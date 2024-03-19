import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './News.js';
import About from './About.js'
import Home from './Home.js'

const App = () => {
  return (
    <Router>
      <Home/>
    <Routes>
      <Route path="newsreporter/home" element={<Home />} />
      <Route path="newsreporter/latest-news" element={<News />} />
      
      <Route path="newsreporter/about" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;