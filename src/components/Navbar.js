import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <h2 className="snacks-text">Snacks:</h2>
                <Link to="/coke" className="nav-links">COKE</Link>
                <Link to="/doritos" className="nav-links">DORITOS</Link>
                <Link to="/snickers" className="nav-links">SNICKERS</Link>
                <Link to="/racoon" className="nav-links">RACOON</Link>
            </nav>
        </div>
    )
}

export default Navbar; 