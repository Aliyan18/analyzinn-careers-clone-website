
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styleSheets/navbar.css'
import { useAccordionButton } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../images/analyzinn_logo.png'

function MyNavbar() {

  const st={zIndex:'1',
  fontWeight: 200, color:'white',backgroundColor:"transparent"}

  const[style,setStyle]=useState(st);
    function handleClick(){
      if(style.backgroundColor=="transparent")
setStyle({...style,backgroundColor:'#45526e'});
else
setStyle({...style,backgroundColor:"transparent"});

    } 
  return (
    <nav className="navbar navbar-expand-lg justify-content-between" style={style}>
    <a className="navbar-brand" href="#" style={{color:'white',opacity:1,
    fontWeight: 200,marginLeft:20}}>

      <img src={logo} style={{height:'60px',width:'200px'}} alt="logo" />
    </a>
    <div>

    <button onClick={handleClick} className="navbar-toggler" type="button" style={{backgroundColor:'white',opacity:1,
    fontWeight: 200}} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{opacity:1,
    fontWeight: 200}}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" id="a" href="#" style={{opacity:1,
    fontWeight: 200}}>Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="a" href="#" style={{opacity:1,
    fontWeight: 200}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" id="a" style={{opacity:1,
    fontWeight: 200}}>Contact</a>
        </li>
        <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" style={{opacity:1,
    fontWeight: 200,marginRight:60}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="a">
Services          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{opacity:1,
    fontWeight: 200,backgroundColor:'white'}}>
            <a className="dropdown-item" href="#" style={{
    fontWeight: 200,backgroundColor:'white'}}>Action</a>
            <a className="dropdown-item" href="#" style={{opacity:1,
    fontWeight: 200,backgroundColor:'white'}}>Another action</a>
            <a className="dropdown-item" href="#" style={{opacity:1,
    fontWeight: 200,backgroundColor:'white'}}>Something else here</a>
          </div>
        </li>
      </ul>
    </div>
    </div>

  </nav>
  );
}

export default MyNavbar;