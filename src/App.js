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
      <Route path="newsreporter/Home" element={<Home />} />
      <Route path="newsreporter/Latest News" element={<News />} />
      
      <Route path="newsreporter/About" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;