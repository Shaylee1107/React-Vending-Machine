import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Doritos from './snacks/Doritos';
import Coke from './snacks/Coke';
import Snickers from './snacks/Snickers';
import Racoon from './snacks/Racoon';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine/>}/>
          <Route path='/coke' element={<Coke/>}/>
          <Route path='/doritos' element={<Doritos/>}/>
          <Route path='/snickers' element={<Snickers/>}/>
          <Route path='/racoon' element={<Racoon/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
