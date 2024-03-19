import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


const News = () => {
  const [news, setNews] = useState([]);

  const navStyle = {
  backgroundColor: '#333',
  overflow: 'hidden',
};
const headlines ={
    padding:'20px',
    backgroundColor:'white',
    marginTop:'1px',

}
const linkStyle = {
  padding: '14px 20px',
  color: 'white',
  textDecoration: 'none',
};

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=57ee2a96292e4a3d925ec1d075c6abdc');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchNews();
  }, []);
if(!news.length){
    return (<><div style={navStyle}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/latest-news" style={linkStyle}>Latest News</Link>
        <Link to="#" style={linkStyle}>Course</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>
    <h1 style={{padding:'20px'}}>Loading...</h1></>)
}
  return (
    <div>
     
    <div style={headlines}>
      <h2>Latest News Headlines</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={{ width: '200px', height: 'auto' }} />}
            <p>{article.description}</p>
             <p><a href={article.url} target="_blank" rel="noopener noreferrer">Click here to read more</a></p>
            <p style={{color:'red'}}>Source: {article.source.name}</p>
          </li>
        ))}
      </ul></div>
    </div>
  );
}

export default News;