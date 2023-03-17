import React, { useState } from "react";
import "../assets/index.css";

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevState) => ({ ...prevState, [name]: 'This field is required.' }));
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: null }));
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (formData.name.trim() === '') {
      errors.name = 'This field is required.';
    }
    if (formData.email.trim() === '') {
      errors.email = 'This field is required.';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address.';
    }
    if (formData.message.trim() === '') {
      errors.message = 'This field is required.';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

return (
    <form className="contact" onSubmit={handleSubmit}>
            <h3>Contact</h3>
        <div>
            <p>Name:</p>
            <input type="text" placeholder="Name" className="name-input" value={formData.name} onChange={handleInputChange} required/>
            {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <p>Email:</p>
          <input type="email" placeholder="Email" className="email-input" value={formData.email} onChange={handleInputChange} required/>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <p>Message:</p>
          <textarea placeholder="Message" value={formData.message} onChange={handleInputChange} required></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
            <button type="submit">Send</button>
    </form>
      )
}

export default Contact;