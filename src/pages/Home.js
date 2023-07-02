import React from "react";
import { useState } from "react";
import "../styles/Home.css";
import bg from '../images/background.png';
import logo from '../images/logo.png';
function Home() {

  const [value, setValue] = useState('');

    const onChange = (event) => {
    setValue(event.target.value);
    }

    const onSearch= (searchTerm) => {
    // our api to fetch search result
    console.log('search ', searchTerm);
    }

  return (
    <div className="home"  style ={{ backgroundImage: `url(${bg})`}}>
      <div className = "centerLogo"><img src = {logo}/></div>
      <div className="top">
        <h1> SmartShop</h1>
        <p> Shopping made easier and cheaper </p>
      </div>
      
      <div className= "search">
        <input type="text" value={value} onChange={onChange}/>
        
        <button onClick={() => onSearch(value)}>Search</button>
      </div>
    </div>
  ); 
}

export default Home