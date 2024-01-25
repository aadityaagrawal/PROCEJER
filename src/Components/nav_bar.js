import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/Images/logo.svg";

function NavigationBar() {

  return (
    <div className="px-5">
      <Navbar collapseOnSelect expand="lg" className="m-0">
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center">
            <img src={logo} height={32} alt="Logo" className="mr-4"></img>
            <p className="m-0 ml-2 fs-3 text-white"> &nbsp; Procejer</p>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor : "white"}} />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features" className="text-dark fs-5 text-white fw-light">
              Features & Solutions
            </Nav.Link>
            <Nav.Link href="#career" className="text-dark fs-5 text-white fw-light">
              Career at Procejer
            </Nav.Link>
            <Nav.Link href="#inquire" className="text-dark fs-5 text-white fw-light">
              Inquire
            </Nav.Link>
            <Nav.Link href="#contact" className="text-dark fs-5 text-white fw-light">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark fs-5 text-white fw-light">
              About Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#signup" className="text-primary fs-5 ">
              Sign-Up for Updates
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
