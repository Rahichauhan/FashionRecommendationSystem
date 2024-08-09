import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="from_name">Your Name</label>
      <input type="text" name="from_name" id="from_name" required />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" required />
      <label htmlFor="to_name"> Name</label>
      <input type="text" name="to_name" id="to_name" required />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
