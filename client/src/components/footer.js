import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import '../components/footer.css'; // Create a CSS file for styling
 

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="footer-left">
        <h1>Connect with us</h1>
      </div>

      <div className="footer-right">
      <IconContext.Provider value={{ color: 'black', size: '5em' }}>

        <div className="social-icons">
        <a href="https://instagram.com/dsc_dsbs?igshid=OGQ5ZDc2ODk2ZA==">

        <FaInstagram /></a>
        <a href="https://github.com/rd1073">

        <FaGithub /></a>
        <a href="https://www.linkedin.com/company/the-data-science-club-srmist/">

        <FaLinkedin /></a>

        
        </div>    </IconContext.Provider>

        <h1>dsc.dsbs.ktr@srmist.edu.in</h1>
      </div>
    </div>
  );
};

export default Footer;
