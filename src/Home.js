import React,{ useState, useEffect } from 'react'
import Bgimage from './Bgimage.jpg'
import {Link} from 'react-router-dom'

const Home=()=>{
  const word = 'DEMOCRACY';
  const [displayedWord, setDisplayedWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setDisplayedWord(prevWord => prevWord + word[currentIndex]);
          setCurrentIndex(prevIndex => (prevIndex + 1) % word.length);
      }, 1000);

      return () => clearInterval(interval);
  }, [word, currentIndex]);

  const resetWord = () => {
      setDisplayedWord('');
      setCurrentIndex(0);
  };

  useEffect(() => {
      if (displayedWord === word) {
          setTimeout(() => {
              resetWord();
          }, 1000);
      }
  }, [displayedWord, word]);







    const navStyle = {
        backgroundColor: '#333',
        overflow: 'hidden',
      };
      
      const linkStyle = {
        padding: '14px 20px',
        color: 'white',
        textDecoration: 'none',
      };

    return(<>
    <div style={navStyle}>
      <Link to="newsreporter/home" style={linkStyle}>Home</Link>
      <Link to="newsreporter/latest-about" style={linkStyle}>Latest News</Link>
      <Link to="#" style={linkStyle}>Course</Link>
      <Link to="newsreporter/about" style={linkStyle}>About</Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',marginTop:'1px' }}>
    <div style={{ position: 'absolute', zIndex: 1,color:'white',fontWeight:'1000',fontSize:'50px' }}>{displayedWord}</div>
    <img src={Bgimage} alt="" style={{ height: '100vh', width: '100%', objectFit: 'cover',opacity:'0.7' }} />
</div>
    </>
    )
}

export default Home ;