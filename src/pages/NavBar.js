import React from 'react'
import logo from "../kiit-logo.png"
import {Link} from "react-router-dom";
// import Kimsform from './kimsform';
import "./Nav.css"
function NavBar() {
  return (
    <div className='header'>
        <div>
            <img src={logo} height="50px" width="80px"/>
        </div>
        <div className='list'>
           <Link to="/k3/Kiit" style={{ color: 'black' }}>Kiit</Link>
           <Link to="/k3/Kiims"style={{ color: 'black' }}>Kims</Link>
           <Link to="/k3/Kiss" style={{ color: 'black' }}>Kiss</Link>
           <Link to="/k3/Hospitality" style={{ color: 'black' }}>Hospitality</Link>
           <Link to="/k3/Temple" style={{ color: 'black' }}>Temple Trust</Link>
           <Link to="/k3/Socials" style={{ color: 'black' }}>Social Media</Link>
        </div>
        <button className='kiit-btn'>logout</button>
    </div>
  )
}

export default NavBar;