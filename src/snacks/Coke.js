import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './photos/photos.css';

const Coke = () => {
    const cokePhoto = require('./photos/coke.png');
    return (
        <>
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
            <nav style={{display: 'inline-block'}}>
                <h3>Go back to</h3>
                <Link to="/" className="venging-machine-link">Vending Machine</Link>
            </nav>
        </>
    )
}

export default Coke; 