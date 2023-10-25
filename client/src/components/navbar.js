import React from 'react';
import '../components/navbar.css'; 
import logo from '../assets/dsc1.png';
 

const Logo = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={logo} alt="Logo" />
      </div>
      <div className="text">
        <p>The Data Science Club</p>
      </div>

      <div className="navigation">
        <a href="/">Home  </a>
        <a href="/teams"> /Teams</a>

        <a href="/events"> /Events</a>
        <a href="https://forms.gle/j5NuifD1TCrMo4cW7"> /Recruitments</a>
      </div>
    </div>

  );
};

export default Logo;
