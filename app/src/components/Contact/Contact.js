import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p1bxs2o', 'template_4k7fv2o', form.current, {
        publicKey: 'YPfFVZQVpw2nlJN1Q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-page">
   
      <div className="contact-heading">Contact Us</div>
      <div className="right-section">
        <div>
          <h2>Get in touch</h2>
          <p>
           Visit our agency or simply send us an email anytime you want.<br></br>If you have any questions, please feel free to contact us.

          </p>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span role="img" aria-label="phone">📞</span> +91987654321
            </div>
            <div className="contact-item">
              <span role="img" aria-label="email">📧</span> asdfgh@gmail.com
            </div>
          </div>
          </div>
      <div className="contact-container">
      
            <div className="left-section">
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
      {/* <label htmlFor="from_name">Your Name</label>
      <input type="text" name="from_name" id="from_name" required />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" required />
      <label htmlFor="to_name"> Name</label>
      <input type="text" name="to_name" id="to_name" required />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required />
      <input type="submit" value="Send" /> */}
      <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone No." />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
    </form>
    </div>
   <div className='bold-contact'> 
    CONTACT US
   </div>
    </div>
    </div>
  );
};

export default ContactUs;
