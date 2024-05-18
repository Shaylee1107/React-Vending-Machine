import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SnacksNavbar from './SnacksNavbar';
import './snacks.css';

const Coke = () => {
    const cokePhoto = require('./photos/coke.png');
    return (
        <>
            <SnacksNavbar mySnack="COKE"/>
            <div className="snack-photo-div">
                <motion.img 
                    src={cokePhoto} 
                    alt="coke" 
                    className="snack-photo" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} 
                />
            </div>
            <nav className="snacks-nav">
                <h3>Go back to {<Link to="/" className="venging-machine-link">Vending Machine</Link>}</h3>
            </nav>
        </>
    )
}

export default Coke; 