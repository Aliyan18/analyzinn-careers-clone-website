
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styleSheets/navbar.css'
import { useAccordionButton } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../images/analyzinn_logo.png'
import { BrowserRouter,  Route, Routes,NavLink,Link } from 'react-router-dom';

function MyNavbar() {

  const style={zIndex:'1',
  fontWeight: 200, color:'white',backgroundColor:"black",position:'sticky', top: '0'}

  

    
  return (
    <nav className="navbar navbar-expand-lg justify-content-between " style={style}>
    <Link to="/" className="navbar-brand custom-navbar"  style={{color:'white',opacity:1,
    fontWeight: 200,marginLeft:20}}>

      <img src={logo} style={{height:'60px',width:'200px'}} alt="logo" />
    </Link>
    <div>

    <button  className="navbar-toggler " type="button" style={{backgroundColor:'grey',opacity:1,
    fontWeight: 200}} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{opacity:1,
    fontWeight: 200}}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" id="a" to="/" style={{opacity:1,
    fontWeight: 200}}>Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" id="a"  to='/about' href="#" style={{opacity:1,
    fontWeight: 200}}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#" id="a"  to='/contact'  style={{opacity:1,
    fontWeight: 200}}>Contact</NavLink>
        </li>
        <li className="nav-item dropdown" >
          <NavLink to='/services' className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" style={{opacity:1,
    fontWeight: 200,marginRight:60}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="a">
Services          </NavLink>
<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ opacity: 1, fontWeight: 200, backgroundColor: 'white' }}>
              <a href="/services#business-analytics" className="dropdown-item" style={{ fontWeight: 200, backgroundColor: 'white' }}>Business Analytics</a>
              <a href="/services#digital-marketing-analytics" className="dropdown-item" style={{ opacity: 1, fontWeight: 200, backgroundColor: 'white' }}>Dig. Mark Analysis</a>
              <a href="/services#automation-integration" className="dropdown-item" style={{ opacity: 1, fontWeight: 200, backgroundColor: 'white' }}>Automation Integration</a>
            </div>
        </li>
      </ul>
    </div>
    </div>

  </nav>
  );
}

export default MyNavbar;