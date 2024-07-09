import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Doritos from './components/snacks/Doritos';
import Coke from './components/snacks/Coke';
import Snickers from './components/snacks/Snickers';
import Racoon from './components/snacks/Racoon';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<VendingMachine/>}/>
          <Route path='/coke' element={<Coke/>}/>
          <Route path='/doritos' element={<Doritos/>}/>
          <Route path='/snickers' element={<Snickers/>}/>
          <Route path='/racoon' element={<Racoon/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
