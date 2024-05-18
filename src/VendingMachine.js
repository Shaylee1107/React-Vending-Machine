import React from 'react';
import './VendingMachine.css';
import Navbar from './Navbar';

const VendingMachine = () => {
    const vendingMachinePhoto = require('./snacks/photos/vendingMachine.png');
    return (
        <div>
            <div className="vendingText">
                <h1>Vending Machine</h1>
                <h2>Choose your snack!</h2>
            </div>
            <div className="vendingPhotoDiv">
                <img src={vendingMachinePhoto} className="vendingPhoto" alt="Vending Machine"/>
            </div>
            <Navbar />
        </div>
    )
}

export default VendingMachine; 