import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import axios from "axios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [apiData, setApiData] = useState(null);

  axios.get("http://localhost:3001/test")
    .then(response => setApiData(response.data))
    .catch(error => {
      console.log(error);
      setApiData(":(");
    });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <p>{apiData}</p>
    </div>
  );
}

export default App;
