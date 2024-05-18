import React from 'react';
import './VendingMachine.css';
import Navbar from './Navbar';
import SnacksNavbar from './snacks/SnacksNavbar';

const VendingMachine = () => {
    const vendingMachinePhoto = require('./snacks/photos/vendingMachine.png');
    return (
        <div>
            <SnacksNavbar/>
            <div className="vendingText">
                <h1 style={{marginBottom: '0'}}>Vending Machine</h1>
                <h3 style={{marginTop: '5px', color: 'hsl(105, 100%, 33%)'}}>Choose your snack!</h3>
            </div>
            <div className="vendingPhotoDiv">
                <img src={vendingMachinePhoto} className="vendingPhoto" alt="Vending Machine"/>
            </div>
            <Navbar />
        </div>
    )
}

export default VendingMachine; 