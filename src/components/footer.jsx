import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <h1 className="footer-heading" style={{ marginBottom: '10px' }}>
            9GRID DESIGN | ARCHITECTS.
          </h1>
          <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '22px' }}>
            We create cutting-edge design solutions that blend creativity and
            functionality. Our passion for architecture and aesthetics drives
            innovation in every project. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium ipsum illo praesentium in, itaque amet.
          </p>
          <p
            style={{
              paddingTop: '2rem',
              fontSize: '22px',
              fontWeight: 400,
              color: '#ccc',
            }}
          >
            Contact Us:
          </p>
          <p style={{ fontSize: '15px', margin: '3px' }}>
            info@9griddesign.com
          </p>
          <p style={{ fontSize: '15px', margin: '3px' }}>
            support@9griddesign.com
          </p>
          <p style={{ fontSize: '15px', margin: '3px' }}>
            Phone: +91 9007779889
          </p>
          <div
            style={{
              display: 'flex',
              gap: '36px',
              fontSize: '20px',
              margin: '40px 0',
            }}
          >
            <i className="footer-brand-icon fa-brands fa-facebook-f"></i>
            <i className="footer-brand-icon fa-brands fa-instagram"></i>
            <i className="footer-brand-icon fa-solid fa-map-location-dot"></i>
            <i className="footer-brand-icon fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div className="footer-quick-links-container">
  <ul className="footer-quick-links-list">
    <h1 className="footer-heading">QUICK LINKS</h1>
    <li className="footer-quick-link">Know about Us</li>
    <li className="footer-quick-link">Home</li>
    <li className="footer-quick-link">Where you can find Us</li>
    <li className="footer-quick-link">Our Projects</li>
    <li className="footer-quick-link">Hall of Fame</li>
    <li className="footer-quick-link">Publications</li>
  </ul>
</div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{}}>
            <h1 className="footer-heading">GET IN TOUCH</h1>
            <p
              style={{
                color: '#ccc',
                fontSize: '15.25px',
                marginBottom: '10px',
              }}
            >
              Have a question or project in mind? Drop us a message or
              email—we’d love to connect!
            </p>
            <input
              type="text"
              className="footer-input"
              placeholder="Enter Your Email Address"
            />
            <textarea
              name=""
              id=""
              rows="7"
              className="footer-input"
              placeholder="Your Message"
              style={{ resize: 'none', margin: '10px 0 20px 0' }}
            ></textarea>
            <button
             className="footer-button"
            >
              REACH US
            </button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: '10px' }} />
      <p style={{ marginTop: '10px', textAlign: 'center' }}>
        &copy; 2013 9GRID DESIGN | TERMS OF SERVICE | PRIVACY POLICY
      </p>
    </div>
  );
}

export default Footer;
