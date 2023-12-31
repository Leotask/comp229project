import React, { useState } from "react";
import handleContact from "../handles/contactsubmit"

export default function About() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, email, mobile, message } = formData;


    let alertMessage = `Thank You ${firstName}! \n${email} \n${mobile} \n${message}`;
 
    setAlertMessage(`Thank you for your message! ${formData.name}! \nMobile: ${formData.mobile} \nEmail ${formData.email}`);

    alert(alertMessage);

    setFormData(initialFormData);
    console.log(formData)
    handleContact(formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div>
      <div className="text"></div>
      <p>Healthy Haven is More Than a Health Clinic</p>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11521.605639169804!2d-79.23847616680303!3d43.78528303946077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0f08cb21bbd%3A0xa70b3f5838a58e58!2s941%20Progress%20Ave%2C%20Scarborough%2C%20ON%20M1G%203T8!5e0!3m2!1sen!2sca!4v1700448179369!5m2!1sen!2sca"
          width="80%"
    height="500"
    allowFullScreen=""
    aria-hidden="false">
          </iframe>
        </div>
      </div>
      <div className="container">
        <div className="text">
          Contact us Form
        </div>
        <form className="contact" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="firstName"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="lastName"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="mobile"
                required
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            
          
              <div className="underline"></div>
              <label htmlFor="mobile">Mobile Number</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                rows="8"
                cols="80"
                id="message"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              
               
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Write your message</label>
            </div>
          </div>

          <div className="input-data">
            <div className="inner"></div>
            <button className="submit-btn" type="submit" value="submit">
              Submit
            </button>
            <button className="submit-btn" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>

        </form>
      </div>
      <div className="contact-list">
        {alertMessage && (
          <div className="alert">
            <p>{alertMessage}</p>
          </div>
        )}
        </div>
    </div>
    



  );
}
