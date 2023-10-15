import React from 'react';
import './work1.css';
import Navbar from './navbar.work';
import Uiux1 from './uiux1.png';
import Uiux2 from './uiux2.png';
import Uiux3 from './uiux3.png';
const Work1 = () => {
  return (
    <div>
        <Navbar/>
    <h1 style={{ paddingLeft: '5%', paddingTop: '3%', textAlign: 'left' }}>UI/UX Design</h1>
      <div className="image-container">
        <img src={Uiux1} alt="Image 1" />
        <img src={Uiux2} alt="Image 2" />
        <img src={Uiux3} alt="Image 3" />
        <img src={Uiux1} alt="Image 1" />
        <img src={Uiux2} alt="Image 2" />
        <img src={Uiux3} alt="Image 3" />
      </div>
    </div>
  );
};

export default Work1;
