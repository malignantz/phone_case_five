import PhoneCaseCardComponent from './components/PhoneCaseCardComponent.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';


function App() {
  let data = {
    title: 'Caseology Parallax',
    img: 'phoneCase.webp',
    desc: 'This is a sample phone case available for purchase!'
  }
  let makeCol = (data) => (<Col lg={true}><PhoneCaseCardComponent data={data} /></Col>);

  return (
    <>
    <NavBarComponent />
    <Container fluid="md">
      <Row xs={1} md={2} lg={3} className="g-4">
      {Array.from({length: 8}).map(i => makeCol(data))}
      </Row>
  </Container>
</>
  )


}

export default App;
