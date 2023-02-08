import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function NavBarComponent({ itemCount }) {
  return (
    <>
      <Navbar bg="light">
        <Container className="">
          <Navbar.Brand href="">
            <NavLink to="/">
              <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                PHONE CASE FIVE
              </span>
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/cart">
              View Cart ({itemCount || 0})
            </Nav.Link>
            <Nav.Link>Checkout</Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us!
            </Nav.Link>
          </Nav>
          <div>
            <Button variant="success">Sign Up!</Button>{" "}
            <Button variant="primary">Login</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBarComponent;
