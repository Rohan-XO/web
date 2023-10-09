import React, { useState } from 'react';
import './form.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <div classname='form'>
      <h2>Want to get in touch?<br/>Drop me a line! </h2>
      <p>Would love to hear from you</p>
      <form onSubmit={handleSubmit}>
        <div classname='format'>
          <div className='row'>
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          </div>
          <div className="row">
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        <div>
          <label htmlFor="message">MESSAGE:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default ContactForm;
