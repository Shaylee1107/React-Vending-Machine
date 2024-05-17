import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="venging-machine-link">Vending Machine</Link>
                <h2 className="snacks-text">Snacks:</h2>
                <Link to="/coke" className="nav-links">Coke</Link>
                <Link to="/doritos" className="nav-links">Doritos</Link>
                <Link to="/snicker" className="nav-links">Snicker</Link>
                <Link to="/racoon" className="nav-links">Racoon</Link>
            </nav>
        </div>
    )
}

export default Navbar; 