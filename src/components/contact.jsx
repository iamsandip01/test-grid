import React from 'react';
import './contact.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <><>
    {/* Section 1: Contact Image & Contact Details */}
    <section className="contact-section">
      <div id="img1" className="contact-image">
        <img src="assets/con_img.jpg" alt="Office Interior" />
      </div>
      <div id="details1" className="contact-details">
        <h2>CONTACT US</h2>
        <h3>Address</h3>
        <p className="contact-address">
          AA Block, Sector 1, Bidhannagar, <br />
          Kolkata, West Bengal <br />
          PIN - 700064
        </p>
        <br />
        <h3>PHONE</h3>
        <p>+91 9007779889</p>
        <br />
        <h3>EMAIL</h3>
        <p>
          <a className="email" href="info@9griddesign.com">
            info@9griddesign.com
          </a>
        </p>
        {/* <p><a class="email" href="info.9griddesign@gmail.com">info.9griddesign@gmail.com</a></p> */}
      </div>
    </section>
    {/* Section 2: Map Embed */}
    <section id="map1" className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7367.2654970955455!2d88.39728!3d22.592835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277dfbbcfd875%3A0x5eb2f0562e9ba9e4!2s9GRID%20DESIGN!5e0!3m2!1sen!2sin!4v1744613587500!5m2!1sen!2sin"
        width={1200}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
    {/* Section 3: Join Our Team */}
    <section className="join-team">
      <h1>Join Our Team</h1>
      <p>
        Interested in working with us? Send your resume to{" "}
        <a href="mailto:info.9griddesign@gmail.com">info.9griddesign@gmail.com</a>
      </p>
    </section>
    {/* WhatsApp Button */}
    <div className="whatsapp-button">
      <a href="https://wa.me/+919007779889" target="_blank">
        <img
          src="assets/whatsapp_logo.jpg"
          alt="WhatsApp"
          className="zoom-effect"
        />
      </a>
    </div>
  </>
  
    </>
  );
};

export default Contact;
