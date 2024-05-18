import React, {useState} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SnacksNavbar from './SnacksNavbar';
import './snacks.css';

const Racoon = () => {
    const [racoonBadMood, setRacoonBadMood] = useState(false);

    const niceRacoonPhoto = require('./photos/nice-racoon.png');
    const madRacoonPhoto = require('./photos/mad-racoon.png');

    const petRacoon = () => {
        setRacoonBadMood(mood => !mood);
    }
    const makeRacoonRunaway = () => {
        return  (
            <div>
              <motion.img 
                src={madRacoonPhoto} 
                alt="coke" 
                onClick={petRacoon} 
                className="snack-photo mad-racoon-photo" 
                animate={{ x: -1000 }} 
                transition={{ ease: "easeOut", duration: 1.7 }}
              />
              <h3>Ah! He didn't like that!</h3>
            </div>
        )
    }
    const showHappyRacoon = () => {
        return (
            <div>
                <img 
                    src={niceRacoonPhoto} 
                    alt="coke" 
                    onClick={petRacoon} 
                    className="snack-photo nice-racoon-photo"
                /> 
                <h3>Awe, lets click on the racoon to pet him!</h3>
            </div>
        )
    }

    return (
        <>
            <SnacksNavbar mySnack="RACOON"/>
            <div className="snack-photo-div">
                {racoonBadMood === false 
                    ? showHappyRacoon()
                    : makeRacoonRunaway()
                }
            </div>
            <nav className="snacks-nav">
                <h3>Go back to {<Link to="/" className="venging-machine-link">Vending Machine</Link>}</h3>
            </nav>
        </>
    )
}

export default Racoon; 