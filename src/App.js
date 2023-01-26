import PhoneCaseCardComponent from './components/PhoneCaseCardComponent.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';
import Footer from './components/FooterComponent.jsx';
import CartComponent from './components/CartComponent.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import { useState } from 'react';

function App() {
  let indexer = function() {
    let i = 0;
    return () => i++;
  };
  let getIndex = indexer();
  let itemData = ['iphone 12 case', 'iPhone XR case']
  let data = {
    title: 'Caseology Parallax',
    img: 'phoneCase.webp',
    desc: 'This is a sample phone case available for purchase!',
    phoneName: 'iPhone 13'
  }
  let makeCol = (data) => (<Col key={getIndex()} lg={true}><PhoneCaseCardComponent key={getIndex()} data={data} handleAdd={handleAdd} /></Col>);

  const [cart, setCart] = useState([]);

  function handleAdd(itemName){
    setCart([...cart, itemName]);
  }

  return (
    <>

    <NavBarComponent itemCount={cart.length} />
    <Container fluid="md">
      <Row xs={1} md={2} lg={3} className="g-3">
      {Array.from({length: 8}).map(i => makeCol(data))}
      </Row>
  </Container>
  <Footer />
  <CartComponent items={cart} />
</>
  )


}

export default App;
