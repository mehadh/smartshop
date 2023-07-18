import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import bg from '../images/background.png';
import logo from '../images/logo.png';


function Home() {

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to call the backend search function and update searchResults
  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`http://localhost:3001/search`, {
        params: {
          query: searchQuery
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    handleSearch(searchQuery);
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="centerLogo"><img src={logo} /></div>
      <div className="top">
        <h1>SmartShop</h1>
        <p>Shopping made easier and cheaper</p>
      </div>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for products"
        />
      </div>
      <div>
        {/* Display search results here */}
        {searchResults.map((product, index) => (
          <div key={index}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>

  ); 
}

export default Home