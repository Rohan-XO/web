import React from 'react';
import './references.css';


const testimonialsData = [
  {
    id: 1,
    name: 'S. A. Venkatasubramanian',
    designation: 'NIFT Assoc. Professor',
    companyname: '(Industry mentor)',
    color: '#F0F4FF',
  },
  {
    id: 2,
    name: 'Vatsal Ambastha',
    designation: 'CEO and Founder',
    companyname: 'Firexit Software Pvt Ltd.',
    color: '#FFECED',

  },
  {
    id: 3,
    name: 'Priyanshu Srivastava',
    designation: 'NIFT Assis. Professor',
    companyname: '(UX and Communication Design)',
    color: '#FFF8E4',
  },
  {
    id: 4,
    name: 'Akshat Gupta',
    designation: 'Founder',
    companyname: 'LittleBird India',
    color: '#E8FFEC',
  },
];

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <div className="heading">
        <h1>RECOMMENDATIONS/&nbsp;REFERENCES</h1>
      </div>
      <div className="testimonials-container">
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card" style={{backgroundColor: testimonial.color}}>
            <div className="content">
                <h3 style={{ color: '#8791B2' }}>{testimonial.name}</h3>
                <h3 style={{ color: '#8791B2' }}>{testimonial.designation}</h3>
                <h3 style={{ color: '#8791B2' }}>{testimonial.companyname}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
