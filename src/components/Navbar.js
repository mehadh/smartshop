import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';
import ReorderIcon from "material-ui/icons/Reorder"
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className ="navbar">
            <div className = "leftSide">
                <img src ={logo} />
            </div>
            <div className = "rightSide">
                <Link to ="/"> Home </Link>
                <Link to ="/menu"> Menu </Link>
                <Link to ="/about"> About </Link>
                <Link to ="/contact"> Contact </Link>
                <button>
                <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar