import React from "react";
import Navbar from "./navbar";
import contactImage from './contact.jpg';

const img = {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    marginTop: '20px',
};

function Contact() {
    return (
        <div style={{ textAlign: 'center',color:"brown" }}>
            <Navbar />
            <h1>Contact Us</h1>
            <img 
                src={contactImage} 
                alt="Contact Us Ice Cream" 
                style={img} 
            />
            <p style={{ marginTop: '20px', fontSize: '18px' ,fontFamily:"cursive"}}>
                Have a question or want to get in touch? Reach out to us!
            </p>
            <p style={{ marginTop: '10px', fontSize: '16px' ,fontFamily:"cursive"}}>
                📞 Phone: 123-456-7890
            </p>
            <p style={{ marginTop: '5px', fontSize: '16px' ,fontFamily:"cursive"}}>
                📧 Email: contact@sweetybites.com
            </p>
            <p style={{ marginTop: '20px', fontSize: '16px' ,fontFamily:"cursive"}}>
                Visit us at: 123 Ice Cream Street, Dessert City
            </p>
        </div>
    );
}

export default Contact;
