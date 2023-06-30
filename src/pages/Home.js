import React from "react";
import "../styles/Home.css";
import bg from '../images/background.png';
function Home() {
  return (
    <div className="home"  style ={{ backgroundImage: `url(${bg})`}}>
      <div className="top"> 
        <h1> SmartShop</h1>
        <p> Shopping made easier and cheaper </p>
      </div>
    </div>
  ); 
}

export default Home