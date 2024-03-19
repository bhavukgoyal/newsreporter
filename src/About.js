import React from 'react';
import {Link} from 'react-router-dom';
import Gmail from './Gm.png.png';
import Telegram from './Telegram.png.png'
import Web from './Web.png.png'

const About = () => {
    const navStyle = {
        backgroundColor: '#333',
        overflow: 'hidden',
      };
      
      const linkStyle = {
        padding: '14px 20px',
        color: 'white',
        textDecoration: 'none',
      };
      const content ={
        height:'auto',
        padding:'20px',
        border:'2px, solid, black',
        marginTop : '1px',
        backgroundColor : 'skyblue'

      }
      const incontent ={
        display : 'block',
        marginTop : '-15px',
        color:'black',
        fontWeight:'1000',
        fontStyle:'italic'

      }
return (<div>

<div style={navStyle}>
      <Link to="newsreporter/home" style={linkStyle}>Home</Link>
      <Link to="newsreporter/latest-news" style={linkStyle}>Latest News</Link>
      <Link to="#" style={linkStyle}>Course</Link>
      <Link to="newsreporter/about" style={linkStyle}>About</Link>
    </div>
 <div style={content}>   
<h1 style={{color:'white'}}>Arun Kumar</h1>
<p style={incontent}>I have served in the news industry for 30 years.</p>
 <p style={incontent}>Over these 30 years, I have had the opportunity to meet elites, politicians, urban residents, rural dwellers, and others.</p>
 <p style={incontent}>For the rest of my life, I am dedicating myself to the youth of this country. My aim is to promote the fourth pillar of our democracy and make it indispensable.  
</p>
<h1 style={{marginTop:'70px',color:'white'}}>Contact</h1>
<img src={Gmail} alt="Whatsapp"/>
<h5 style={{color:'white'}}>Write your queries and messages to me.</h5>
<img src={Telegram} alt="Telegram"/>
<h5 style={{color:'white'}}>Join my telegram group.</h5>
<img src={Web} alt="Website"/>
<h5 style={{color:'white'}}>Visit my website.</h5>
</div>







</div>
)
}
export default About