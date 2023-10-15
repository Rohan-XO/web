import React from 'react';
import Navbar from './navbar.pages';
import img1 from './about.png';
import './about.css';

const About = () => {
  return (
    <div className='about-body'>
      <Navbar/> 
      <img className='img_x' src={img1} alt="" />
    </div>
  );
}

export default About;
