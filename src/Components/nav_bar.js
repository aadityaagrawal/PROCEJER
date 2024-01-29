import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/Images/logo.svg";
import { Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-dark px-5">
      <Navbar.Brand href="#home">
        <div className="d-flex align-items-center">
          <img src={logo} height={32} alt="Logo" className="mr-4"></img>
          <p className="m-0 ml-2 fs-3 text-white"> &nbsp; Procejer</p>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#about" className="text-dark text-white fw-light border-right">
            About Us
          </Nav.Link>
          <Nav.Link
            href="#features"
            className="text-dark text-white fw-light border-right"
          >
            Features & Solutions
          </Nav.Link>
          <Nav.Link href="#career" className="text-dark text-white fw-light border-right">
            Career
          </Nav.Link>
          <Nav.Link href="#inquire" className="text-dark text-white fw-light border-right">
            Contact
          </Nav.Link>
          <Nav.Link href="#latest" className="text-dark text-white fw-light">
            Latest
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
