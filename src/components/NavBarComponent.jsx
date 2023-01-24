import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">PhoneCaseFive</Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}
  export default NavBarComponent;