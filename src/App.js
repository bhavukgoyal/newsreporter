import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './News.js';
import About from './About.js'
import Home from './Home.js'

const App = () => {
  return (<>
  <Home/>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Latest News" element={<News />} />
      
      <Route path="/About" element={<About />} />
    </Routes>
  </Router></>
  );
}

export default App;