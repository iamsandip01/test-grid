import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import ProjectDetail from './components/projectDetail';
// import SeeMoreButton from './components/SeeMoreButton';
// import Publications from './components/Publication';
import Gallery from './components/gallery';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectName" element={<ProjectDetail />} />

        {/* <Route path="/project/hsb-mayapur" element={<HSB_Mayapur />} />
        <Route path="/project/hsb-taki" element={<HSB_Taki />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        {/* <Route path="/publications" element={<Publications />} /> */}
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;