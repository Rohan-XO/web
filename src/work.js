import React from 'react';
import Navbar from './navbar.pages';
import Project1 from './project1.png';
import Project2 from './project2.png';
import Project3 from './project3.png';
import { Link } from 'react-router-dom';
import './work.css';

const Work = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <h1 style={{ paddingLeft: '5%', paddingTop: '4.5%', marginBottom: '-3.5%', textAlign: 'left' }}>PROJECTS</h1>
      <div className='project-container' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0%' }}>
        <div className='project' style={{ flex: 1, margin: '4%' }}>
        <Link to="/work1">
            <img src={Project1} alt="Project 1" style={{ width: '100%', marginTop:'-10px' }} />
            <h2 className='project-name' style={{textDecoration:'none'}}><br />UI/UX Design</h2>
          </Link>
        </div>
        <div className='project' style={{ flex: 1, margin: '4%', marginTop: '68px' }}>
        <Link to="/work2">
            <img src={Project2} alt="Project 2" style={{ width: '100%' }} />
            <h2 className='project-name' style={{textDecoration:'none'}}><br />Graphic Design and <br /> Digital Illustration</h2>
          </Link>
        </div>
        <div className='project' style={{ flex: 1, margin: '4%', marginTop:'10px' }}>
        <Link to="/work3">
            <img src={Project3} alt="Project 3" style={{ width: '100%' }} />
            <h2 className='project-name' style={{textDecoration:'none'}}>Product Design</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;

