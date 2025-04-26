import React from "react";
import { Link } from "react-router-dom"; 
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src="../../public/assets/logo_white.png" style={{ maxWidth: "160px" }} alt="" />
      </div>
      <ul className="link-container">
        <li className="nav-link"><Link to="/">HOME</Link></li>
        <li className="nav-link">
        <Link to="/projects">PROJECTS</Link></li>
        <li className="nav-link">GALLERY</li>
        <li className="nav-link">ABOUT US</li>
        <li className="nav-link">
        {/* <Link to="/publications">PUBLICATIONS</Link> */}
        </li>
        <li className="nav-link">
        <Link to="/contact">CONTACT US</Link></li>
      </ul>
      <div className="nav-item">
        DESIGN YOUR DREAM
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
