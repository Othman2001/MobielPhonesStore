import { Navbar , Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './nav.css'
const NavBar = ()=>{
    return(
        <div>
    <Navbar bg="dark" expand="lg" className = "navbar  ">
      <Link to="/">
  <Navbar.Brand href="#home" className="ml-auto" >Phones Store</Navbar.Brand>

      </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto"> <Link to = "/add">
      <Nav.Link href="#home">
        Add new Product
        </Nav.Link>
        </Link>
    </Nav>
 
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default NavBar