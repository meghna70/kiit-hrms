import React from 'react'
//import logo from "../kiit-logo.png"
import {Link} from "react-router-dom";
// import Kimsform from './kimsform';
import "./Nav.css"
function NavBar() {
  return (
    <div className='header'>
        <div>
            {/* <img src={logo} height="50px" width="80px"/> */}
        </div>
        <div className='list'>
           <Link to="/Kimsform" style={{ color: 'black' }}>Kiit</Link>
           <Link to="kiims"style={{ color: 'black' }}>Kims</Link>
           <Link to="kiss" style={{ color: 'black' }}>Kiss</Link>
           <Link to="hospitality " style={{ color: 'black' }}>Hospitality</Link>
           <Link to="templetrust" style={{ color: 'black' }}>Temple Trust</Link>
           <Link to="socialmedia" style={{ color: 'black' }}>Social Media</Link>
        </div>
        <button>logout</button>
    </div>
  )
}

export default NavBar;