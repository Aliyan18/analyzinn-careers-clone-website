
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styleSheets/navbar.css'
function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg justify-content-between" style={{zIndex:'1',opacity:1,
    fontWeight: 200, color:'white'}}>
    <a className="navbar-brand" href="#" style={{color:'white',opacity:1,
    fontWeight: 200,marginLeft:20}}>Navbar</a>
    <div>

    <button className="navbar-toggler" type="button" style={{backgroundColor:'white',opacity:1,
    fontWeight: 200}} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{color:'white',opacity:1,
    fontWeight: 200}}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#" style={{color:'white',opacity:1,
    fontWeight: 200}}>Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'white',opacity:1,
    fontWeight: 200}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'white',opacity:1,
    fontWeight: 200}}>Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/services" id="navbarDropdownMenuLink" style={{color:'white',opacity:1,
    fontWeight: 200,marginRight:60}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Services          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{opacity:1,
    fontWeight: 200}}>
            <a className="dropdown-item" href="#" style={{opacity:1,
    fontWeight: 200}}>Action</a>
            <a className="dropdown-item" href="#" style={{opacity:1,
    fontWeight: 200}}>Another action</a>
            <a className="dropdown-item" href="#" style={{opacity:1,
    fontWeight: 200}}>Something else here</a>
          </div>
        </li>
      </ul>
    </div>
    </div>

  </nav>
  );
}

export default MyNavbar;