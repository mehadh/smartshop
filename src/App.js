import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import axios from "axios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
  const data = async() => {
    try {
      const response = await axios.get("localhost:3001/test")
      return response.data
    }
    catch(error){
      console.log(error)
      return ":("
    }
  }
  return (
    
    <div className ="App"> 
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <p>
        {await data()}
      </p>
    </div>

    
     

  );
}
export default App;