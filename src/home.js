import React from 'react';
import './home.css';
import Ticket from './ticket.png';
import Main from './main.png';
import Form from './form';
//import Form from './form';

const home = () => {
  return (
    <div>
      <div className="text">
        <h1>Shambhavi Palni <br/> UX Designer</h1></div>
        <br/>
        <p className='homepagetext'>Hey there! I am a creativegraphic and UI/ UX
          <br/>
          Designer, and here is your ticket to my portfolio!</p>
      
        <img className='ticket' src={Ticket} alt="Ticket" />
        <br />
        <br />
        <br />
        <img className='main' src={Main} alt="Main" />
        <Form/>
    </div>
  );
}

export default home;
