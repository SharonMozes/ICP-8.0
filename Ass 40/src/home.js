import React from "react";
import Navbar from "./navbar";
import iceCreamImage from './icecream.jpg';

const img = {
    width: '400px',  
    height: '400px',
    borderRadius: '50%',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

function Home() {
    return (
        <div style={{ textAlign: 'center',color:"brown" }}>
            <Navbar />
            <h1>Welcome to Sweety Bites!</h1>
            <img 
                src={iceCreamImage} 
                alt="Ice Cream Shop" 
                style={img}  
            />
            <p style={{ marginTop: '20px', fontSize: '20px' ,fontFamily:"cursive"}}>
                Enjoy the best ice cream in town with a variety of flavors and toppings. Visit us for a delightful experience!
            </p>
        </div>
    );
}

export default Home;
