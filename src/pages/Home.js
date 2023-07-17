import React from "react";
import { useState } from "react";
import "../styles/Home.css";
import bg from '../images/background.png';
import logo from '../images/logo.png';
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";


function Home() {
  const [results, setResults] = useState([]);
  return (
    <div className="home"  style ={{ backgroundImage: `url(${bg})`}}>
      <div className = "centerLogo"><img src = {logo}/></div>
      <div className="top">
        <h1> SmartShop</h1>
        <p> Shopping made easier and cheaper </p>
      </div>
      <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
  ); 
}
export default Home;