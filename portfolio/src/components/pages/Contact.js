import React, { useState } from "react";
import "../assets/index.css";

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (value.trim() === '') {
          setErrors((prevState) => ({ ...prevState, [name]: 'This field is required.' }));
        } else {
          setErrors((prevState) => ({ ...prevState, [name]: null }));
        }
        if (name === 'name') {
          setName(value);
        } else if (name === 'email') {
          setEmail(value);
        } else if (name === 'message') {
          setMessage(value);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (name.trim() === '') {
          errors.name = 'This field is required.';
        }
        if (email.trim() === '') {
          errors.email = 'This field is required.';
        }
        if (message.trim() === '') {
          errors.message = 'This field is required.';
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
          console.log({ name, email, message });
        }
      };

return (
    <form className="contact" onSubmit={handleSubmit}>
            <h3>Contact</h3>
        <div>
            <p>Name:</p>
            <input type="text" placeholder="Name" className="name-input" value={name} onChange={handleInputChange} required/>
            {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <p>Email:</p>
          <input type="email" placeholder="Email" className="email-input" value={email} onChange={handleInputChange} required/>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <p>Message:</p>
          <textarea placeholder="Message" value={message} onChange={handleInputChange} required></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
            <button type="submit">Submit</button>
    </form>
      )
}

export default Contact;