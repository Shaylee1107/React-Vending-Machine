import React from 'react';
import { motion } from "framer-motion";
import './photos/photos.css';

const Doritos = () => {
    const doritosPhoto = require('./photos/doritos.png');
    return (
        <div className="snack-photo-div">
            <motion.img 
                src={doritosPhoto} 
                alt="doritos" 
                className="snack-photo doritos-photo" 
                animate={{ rotate: 360 }}
            />
        </div>
    )
}

export default Doritos; 