import React from 'react';
import '../css/VendingMachine.css';
import Navbar from './Navbar';
import SnacksNavbar from './snacks/SnacksNavbar';

const VendingMachine = () => {
    const vendingMachinePhoto = require('../photos/vendingMachine.png');
    return (
        <div>
            <SnacksNavbar/>
            <div className="vendingText">
                <h1 className="title">Vending Machine</h1>
                <h3 className="subheading">Choose your snack!</h3>
            </div>
            <div className="vendingPhotoDiv">
                <img src={vendingMachinePhoto} className="vendingPhoto" alt="Vending Machine"/>
            </div>
            <Navbar />
        </div>
    )
}

export default VendingMachine; 