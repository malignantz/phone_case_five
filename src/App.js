import NavBarComponent from './components/NavBarComponent.jsx';
import Footer from './components/FooterComponent.jsx';
import CartComponent from './components/CartComponent.jsx';
import PhoneCaseListComponent from './components/PhoneCaseListComponent.jsx';
import AboutComponent from './components/AboutComponent.jsx';
import {Route, Routes} from 'react-router';

import './App.css';
import { useState } from 'react';

function App() {
  let indexer = function() {
    let i = 0;
    return () => i++;
  };
  let getIndex = indexer();

  let data = {
    title: 'Caseology Parallax',
    img: 'phoneCase.webp',
    desc: 'This is a sample phone case available for purchase!',
    phoneName: 'iPhone 13'
  };



  const [cart, setCart] = useState([]);

  function handleAdd(itemName){
    setCart([...cart, itemName]);
  }

  return (
    <>

    <NavBarComponent itemCount={cart.length} />

   <Routes>
    <Route path="/" element={<PhoneCaseListComponent getIndex={getIndex} handleAdd={handleAdd} data={data}/>} />
    <Route path="/cart" element={<CartComponent items={cart} />} />
    <Route path='/about' element={<AboutComponent />} />
   </Routes>

  <Footer />
</>
  )


}

export default App;
