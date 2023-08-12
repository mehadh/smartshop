import React from "react";
import "../styles/Home.css";
import bg from '../images/background.png';
import logo from '../images/logo.png';
import { SearchBar } from "../components/SearchBar";
import axios from 'axios';

function Home() {

    const handleSearch = async (searchTerm) => {
      try {
        const response = await axios.get(`http://localhost:3001/search?query=${searchTerm}`);
        return response.data
      } catch (error) {
        console.error(error);
        return [];
      }
    };

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="centerLogo"><img src={logo} /></div>
      <div className="top">
        <h1>SmartShop</h1>
        <p>Shopping made easier and cheaper</p>
      </div>
      <div className= "search-bar-container">

        <SearchBar handleSearch={handleSearch}/>

      </div>
    </div>

  ); 
}

export default Home