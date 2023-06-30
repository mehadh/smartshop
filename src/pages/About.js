import React from 'react';
import grocery from "../images/grocery.webp";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
        <div className = "aboutTop" 
       style ={{ backgroundImage: `url(${grocery})`}}>
       </div>
        <div className = "aboutBottom">
            <h1> ABOUT US</h1>
            <p>
            At SmartShop, we believe in making the most out of your grocery shopping experience. 
            SmartShop is an online platform designed to revolutionize your grocery trip. Our website 
            provides an intuitive and convenient way to compare prices of grocery items in the Greater Boston area. 
            Say goodbye to endlessly browsing through different store flyers or wasting time visiting 
            multiple stores to find the best deals. With SmartShop, you can effortlessly find 
            the best prices on your favorite grocery items, all in one place. Using our user-friendly
             interface, simply input the items you need one at a time. SmartShop will 
             then scan the databases of various local grocery stores, allowing you to quickly view and 
             compare prices. Whether you're looking for fresh produce, pantry staples, or household 
             essentials, SmartShop ensures that you always get the best value for your money. 
             Not only does SmartShop help you save money, but it also saves you valuable time. 
             No more driving from store to store or spending hours researching prices online. 
             With just a few clicks, you can make informed decisions and plan your shopping trips 
             efficiently. We believe that grocery shopping should be hassle-free, cost-effective, 
             and enjoyable, which is why we created SmartShop.

            </p>

        </div>
    </div>
  );
}

export default About