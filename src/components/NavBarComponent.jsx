import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBarComponent({itemCount}) {
  return (
    <>
      <Navbar bg="light">
        <Container className="">

          <Navbar.Brand href=""><span style={{fontSize: '1.5em', fontWeight: 'bold'}}>PHONE CASE FIVE</span></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link>View Cart ({itemCount || 0})</Nav.Link>
          <Nav.Link>Checkout</Nav.Link>
          </Nav>
          <div>
            <Button variant="success">Sign Up!</Button>{' '}
            <Button variant="primary">Login</Button>
        </div>
        </Container>
      </Navbar>
      </>
  );
}
export default NavBarComponent;