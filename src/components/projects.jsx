import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css'; // Make sure your provided CSS is here

function Project() {
  const [imageData] = useState([
    { src: '/assets/Mn_prj_1.jpg', alt: 'HSB Mayapur', text: 'HSB, MAYAPUR', text2: 'December 17 2023', link: '/project/hsb_mayapur', data: 'rass-mayapur' },
    { src: '/assets/taki_web_3.jpg', alt: 'HSB Taki', text: 'HSB, Taki', text2: '', link: '/project/hsb_taki', data: 'taki-hsb' },
    { src: '/assets/Mn_prj_3.jpg', alt: 'Project 3', text: 'Project 3', text2: 'Food 3 Test', link: '/404' },
    { src: '/assets/Mn_prj_4.jpg', alt: 'Project 4', text: 'Project 4', text2: 'Food 4 Test', link: '/404' },
    { src: '/assets/Mn_prj_5.jpg', alt: 'Project 5', text: 'Project 5', text2: 'Food 5 Test', link: '/404' },
    { src: '/assets/Mn_prj_6.jpg', alt: 'Project 6', text: 'Project 6', text2: 'Food 6 Test', link: '/404' },
    { src: '/assets/Mn_prj_7.jpg', alt: 'Project 7', text: 'Project 7', text2: 'Food 1 Test', link: '/404' },
    { src: '/assets/Mn_prj_8.jpg', alt: 'Project 8', text: 'Project 8', text2: 'Food 2 Test', link: '/404' },
    { src: '/assets/Mn_prj_9.jpg', alt: 'Project 9', text: 'Project 9', text2: 'Food 3 Test', link: '/404' },
    { src: '/assets/Mn_prj_10.jpg', alt: 'Project 10', text: 'Project 10', text2: 'Food 4 Test', link: '/404' },
    { src: '/assets/Mn_prj_11.jpg', alt: 'Project 11', text: 'Project 11', text2: 'Food 5 Test', link: '/404' },
    { src: '/assets/Mn_prj_12.jpg', alt: 'Project 12', text: 'Project 12', text2: 'Food 6 Test', link: '/404' },
  ]);

  const [visibleGroups, setVisibleGroups] = useState(1);
  const groupSize = 4;

  const groups = [];
  for (let i = 0; i < imageData.length; i += groupSize) {
    groups.push(imageData.slice(i, i + groupSize));
  }

  const handleSeeMore = () => {
    setVisibleGroups((prev) => prev + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Observe each item only once
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible
      }
    );

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      gridItems.forEach((item) => observer.unobserve(item));
    };
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <>
      <section className="hero">
        <h1>PROJECTS</h1>
        <p>
          Our portfolio showcases a diverse range of projects, each echoing our
          commitment to client-oriented solutions, efficient space use, and harmony
          between architecture and interior design.
        </p>
      </section>

      <div className="parent">
        {groups.slice(0, visibleGroups).map((group, groupIndex) => (
          <div className="group" key={groupIndex}>
            {group.map((image, index) => (
              <div className="grid-item" key={index}>
                <Link
                  to={image.link}
                  onClick={() => {
                    if (image.data) {
                      localStorage.setItem('data', image.data);
                    }
                  }}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="overlay">
                    <div className="text-line1">{image.text}</div>
                    <div className="text-line2">{image.text2 || ''}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      {visibleGroups < groups.length && (
        <button className="more-projects" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </>
  );
}

export default Project;