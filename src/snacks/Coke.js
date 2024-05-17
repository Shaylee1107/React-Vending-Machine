import React from 'react';
import { motion } from "framer-motion";
import './photos/photos.css';

const Coke = () => {
    const cokePhoto = require('./photos/coke.png');
    return (
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
    )
}

export default Coke; 