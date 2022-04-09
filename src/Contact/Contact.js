import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_908yx8s', 'template_form', form.current, 'crkkEJ_zxbFWYrYKb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
  };
  return (
    <div className='contact'>
        <h4 style={{color: "#828282", fontWeight: "600", padding: "10px 0px"}}>Leave a message for me.</h4>
        <form ref={form} onSubmit={sendEmail}>
            {/* <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label> */}
            <textarea name="message" /><br />
            <input className='input_send' type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact