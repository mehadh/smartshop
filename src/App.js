import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch= (searchTerm) => {
    // our api to fetch search result
    console.log('search ', searchTerm);
  }

  return (
    
    <div className ="App"> 
    
      <Router>
        <Navbar />
        <Routes>
          <Route path= "/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </Routes>
        
      </Router>
      <div className= "search">
        <input type="text" value={value} onChange={onChange}/>
        <button onClick={() => onSearch(value)}>Search</button>
      </div>
    </div>

    
     

  );
}
export default App;