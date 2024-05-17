import React from 'react';
import './VendingMachine.css';
import { Link } from 'react-router-dom';

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
            <nav className="nav">
                <h2 className="snacks-text">Snacks:</h2>
                <Link to="/coke" className="nav-links">Coke</Link>
                <Link to="/doritos" className="nav-links">Doritos</Link>
                <Link to="/snicker" className="nav-links">Snicker</Link>
                <Link to="/racoon" className="nav-links">Racoon</Link>
            </nav>
        </div>
    )
}

export default VendingMachine; 