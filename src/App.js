import PhoneCaseCard from './components/PhoneCaseCard.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><PhoneCaseCard /></Col>
        <Col><PhoneCaseCard /></Col>
      </Row>
    </Container>
  );
}

export default App;
