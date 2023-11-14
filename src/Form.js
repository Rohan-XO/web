import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import Artwork from './Artwork.png'

const Form = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            message: message,
        }

        try{
            const response = await axios.post('http://localhost:5000/mail', formData);
            if(response.status === 200){
                console.log(response.data.message);
            }
        } catch (err){
            console.log('Sorry try again!',err);
        }

    }

    return (
        <div className='Formalign'>
        <div className='Form'>
            <p id = 'top'>
                Want to get in touch?
                <br/>
                Drop me a line!
            </p>
            <h3 className='second'>
                Would love to hear from you!
            </h3>
            <form className='details' onSubmit={handleFormSubmit}>
                <div className='third'>
                    <div className='name'>    
                        <label htmlFor='name'>NAME</label>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Enter your name' 
                            required 
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>EMAIL</label>
                        <input 
                            type='text' 
                            name='email' 
                            placeholder='Enter your email' 
                            required
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                </div>
                <div className='message'>
                    <label htmlFor='message'>MESSAGE</label>
                    <textarea
                        rows={5}
                        name='message' 
                        placeholder='Enter your message'
                        onChange={(e) => { setMessage(e.target.value) }}
                    ></textarea>
                </div>
                <button className = 'btn' type='submit'>Submit</button>
            </form>
        </div>
        <img className='artwork' src={Artwork} alt="Main"/>
        </div>
    )
}

export default Form