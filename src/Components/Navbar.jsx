import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Nav>
            <Nav>
              <span className="me-2">Your store</span>
              <Navbar.Brand href="#">CHESTERFIELD</Navbar.Brand>
            </Nav>
            <Nav>
              <Navbar.Collapse id="navbarScroll">
                <span>
                  Call for a Free Estimate! <span>(636) 259-2656</span>
                </span>
                <Button variant="outline-success">Book Your Cleaning</Button>
              </Navbar.Collapse>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
      <hr />
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Nav className="d-flex align-items-center justify-content-between w-100 p-2" style={{height:'50px'}}>
          <Nav className=" h-100 d-flex align-items-center">
          <Navbar.Brand href="#">
            <img
              src="https://twomaidscleaning.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Ftwomaidsengi%2Fimage%2Fupload%2Fc_scale%2Cf_auto%2Cq_auto%2Cw_1014%2Fv1670257150%2Fhubsite-reskin%2Ftwo-maids-logo-pink.png&w=2048&q=75"
              alt="" height={'40px'}
            />
          </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav className="h-100">
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1">Services</Nav.Link>
              <Nav.Link href="#action2">Locations</Nav.Link>
              <Nav.Link href="#action2">Why Hire Us</Nav.Link>
              <Nav.Link href="#action2">Franchise Opportunities</Nav.Link>
              <NavDropdown title="More" align={{ lg: 'end' }} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Careers
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Reviews
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              {/* <DropdownButton
          as={ButtonGroup}
          
          title="Left-aligned but right aligned when large screen"
          id="dropdown-menu-align-responsive-1"
        >
          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
        </DropdownButton> */}
            </Nav>
          </Navbar.Collapse>
          </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
