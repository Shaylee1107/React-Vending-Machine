import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Vending Machine</Link>
                <Link to="/coke">Coke</Link>
                <Link to="/doritos">Doritos</Link>
                <Link to="/snicker">Snicker</Link>
            </nav>
        </div>
    )
}

export default Navbar; 