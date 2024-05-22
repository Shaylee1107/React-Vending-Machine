import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SnacksNavbar from './SnacksNavbar';
import '../../css/Snacks.css';

const Doritos = () => {
    const doritosPhoto = require('../../photos/doritos.png');
    return (
        <>
            <SnacksNavbar mySnack="DORITOS"/>
            <div className="snack-photo-div">
                <motion.img 
                    src={doritosPhoto} 
                    alt="doritos" 
                    className="snack-photo doritos-photo" 
                    animate={{ rotate: 360 }}
                />
            </div>
            <nav className="snacks-nav">
                <h3>Go back to {<Link to="/" className="venging-machine-link">Vending Machine</Link>}</h3>
            </nav>
        </>
    )
}

export default Doritos; 