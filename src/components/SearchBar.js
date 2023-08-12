import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ( {handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = async (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        if (newSearchTerm.trim() !== '') {
            const results = await handleSearch(newSearchTerm);
            setSearchResults(results);
          } else {
            setSearchResults([]);
          }

    };
    return (
    
        <div className= "input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search Products"
                   value={searchTerm}
                   onChange={handleChange}
            />
            {searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map((result, index) => (
                        <div key={index} className="search-result-item">
                            {result.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
)};