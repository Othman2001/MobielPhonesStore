import { Navbar , Nav, NavDropdown} from 'react-bootstrap'
import './nav.css'
const NavBar = ()=>{
    return(
        <div>
    <Navbar bg="dark" expand="lg" className = "navbar  ">
  <Navbar.Brand href="#home" className="ml-auto" >Phones Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Add new Product</Nav.Link>
    </Nav>
 
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default NavBar