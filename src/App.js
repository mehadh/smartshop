import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
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