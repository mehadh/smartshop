import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ( {handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = async (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        handleSearch(newSearchTerm)

    };
    return (
    
        <div className= "input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search Products"
                   value={searchTerm}
                   onChange={handleChange}
            />
    </div>
)};