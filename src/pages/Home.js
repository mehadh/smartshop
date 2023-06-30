import React from "react";
import "../styles/Home.css";
import bg from '../images/background.png';
function Home() {
  return (
    <div className="home"
    style = {{ backgroundImage: `url(${bg})`}}>
    </div>
  ); 
}

export default Home