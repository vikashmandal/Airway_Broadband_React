import React from 'react'
import './contactus.scss'
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const ContactUs = () => {

    // FORM DATA
    const onChange = () => {

    };

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='contact-us_form'>
                      {/* <h2 /className='h2'>Contact US</h2> */}

            <form onSubmit={handleSubmit} >
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="tel" name="number" placeholder="Phone Number" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
                <ReCAPTCHA
                    sitekey="6Ldqb08qAAAAANQFrAABl9p9xI6HTmDXL2Hnxrm2"
                    onChange={onChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs