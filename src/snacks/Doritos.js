import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './photos/photos.css';

const Doritos = () => {
    const doritosPhoto = require('./photos/doritos.png');
    return (
        <>
            <div className="snack-photo-div">
                <motion.img 
                    src={doritosPhoto} 
                    alt="doritos" 
                    className="snack-photo doritos-photo" 
                    animate={{ rotate: 360 }}
                />
            </div>
            <nav>
                <Link to="/" className="venging-machine-link">Vending Machine</Link>
            </nav>
        </>
    )
}

export default Doritos; 