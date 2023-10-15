import React from 'react';
import './home.css';
import Navbar from './navbar'
import Ticket from './ticket.png';
import Main from './main.png';
import Button from './button';

const home = () => {
  return (
    <div>
      <Navbar/>
     
      <div className="text">
        <h1>Shambhavi Palni <br/> UX Designer</h1></div>  
        <br/>
        <p className='homepagetext'>Hey there! I am a creativegraphic and UI/ UX
          <br/>
          Designer, and here is your ticket to my portfolio!</p>
        <div className="button"><Button/></div>
        <img className='ticket' src={Ticket} alt="Ticket" />
        <br />
        <br />
        <br />
        <img className='main' src={Main} alt="Main" />
    </div>
  );
}

export default home;
