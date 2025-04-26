import React from 'react';
import './projectItem.css'; 

function projectItem({ src, alt, text, text2, link, data, delay }) {
  const handleClick = () => {
    if (data) {
      localStorage.setItem('data', data);
    }
    if (link && link !== './404.html') {
      window.open(link, '_blank');
    } else if (link === './404.html') {
      console.log('Link is a 404 page.');
    }
  };

  return (
    <div className="grid-item" style={{ transitionDelay: `${delay}ms` }}>
      <a href={link !== './404.html' ? link : undefined} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <img src={src} alt={alt} />
      </a>
      <div className="overlay">
        <div className="text-line1">{text}</div>
        <div className="text-line2">{text2 || ''}</div>
      </div>
    </div>
  );
}

export default projectItem;