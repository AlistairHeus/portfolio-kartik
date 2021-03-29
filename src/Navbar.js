import React from 'react'
import logo from '../src/images/logo.png'

import {NavLink} from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
          
    
    
    <div className='container'>

  <a className="navbar-brand" href="#"><img className='logo' src ={logo} alt = 'logo'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Me</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/skills">Skills</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact me</NavLink>
      </li>
    </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
