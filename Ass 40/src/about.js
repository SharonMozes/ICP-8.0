import React from "react";
import Navbar from "./navbar";
import aboutImage from './about.jpg'; // Replace with your actual image path

const img = {
    width: '400px',  
    height: 'auto',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

function About() {
    return (
        <div style={{ textAlign: 'center',color:"brown"  }}>
            <Navbar />
            <h1>About Sweety Bites</h1>
            <img 
                src={aboutImage} 
                alt="About Ice Cream Shop" 
                style={img}  // Applying the styles from the img object
            />
            <p style={{ marginTop: '20px', fontSize: '18px',fontFamily:"cursive" }}>
                At Sweety Bites, we believe in serving happiness with every scoop! Our journey began with a passion for creating the creamiest, most flavorful ice creams in town. From classic favorites to innovative new flavors, we craft each batch with love and care. Join us in indulging in sweet moments that bring joy to every occasion.
            </p>
            <p style={{ marginTop: '20px', fontSize: '18px',fontFamily:"cursive"}}>
                Our shop is not just about ice cream; it’s about creating a space where memories are made. Whether you're celebrating a special event or simply treating yourself, Sweety Bites is here to make it a delightful experience.
            </p>
        </div>
    );
}

export default About;
