import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SnacksNavbar from './SnacksNavbar';
import './snacks.css';

const Snickers = () => {
    const snickerPhoto = require('./photos/snicker.png');
    return (
        <>
            <SnacksNavbar mySnack="SNICKERS"/>
            <div className="snack-photo-div">
                <motion.img 
                    src={snickerPhoto} 
                    alt="coke" 
                    className="snack-photo snicker-photo"
                    animate={{ rotate: 20 }}
                />
                <h3>Oh no! Someone took a bite...</h3>
            </div>
            <nav className="snacks-nav">
                <h3>Go back to {<Link to="/" className="venging-machine-link">Vending Machine</Link>}</h3>
            </nav>
        </>
    )
}

export default Snickers; 