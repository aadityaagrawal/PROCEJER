import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/Images/logo.svg";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="px-5">
      <Navbar.Brand href="#home">
        <div className="d-flex align-items-baseline py-3">
          <img src={logo} height={40} alt="Logo"></img>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link
            href="#features"
            className="text-dark text-white fw-light border-right fs-5"
          >
            Features & Solutions
          </Nav.Link>
          <Nav.Link
            href="#career"
            className="text-dark text-white fw-light border-right fs-5"
          >
            Career
          </Nav.Link>
          <Nav.Link
            href="#about"
            className="text-dark text-white fw-light border-right fs-5"
          >
            Contact Us
          </Nav.Link>
          <Nav.Link
            href="#about"
            className="text-dark text-white fw-light border-right fs-5"
          >
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
