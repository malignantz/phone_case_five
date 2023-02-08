import { NavLink, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarComponent({ itemCount, isAuthenticated, handleLogin, logout }) {
  let navigate = useNavigate();

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
            <Button
              variant={isAuthenticated ? "primary" : "success"}
              onClick={() =>
                isAuthenticated ? navigate("/myaccount") : handleLogin()
              }
            >
              {isAuthenticated ? "My Account" : "Sign Up / Login"}
            </Button>{" "}
            {isAuthenticated && (
              <Button variant="secondary" onClick={() => logout()}>
                Logout
              </Button>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBarComponent;
