import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Doritos from './snacks/Doritos';
import Coke from './snacks/Coke';
import Snicker from './snacks/Snicker';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<VendingMachine/>}/>
          <Route path='/coke' element={<Coke/>}/>
          <Route path='/doritos' element={<Doritos/>}/>
          <Route path='/snicker' element={<Snicker/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
