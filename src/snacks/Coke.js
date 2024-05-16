import React from 'react';
import './photos/photos.css';

const Coke = () => {
    const cokePhoto = require('./photos/coke.png');
    return (
        <div className="snack-photo-div">
            <img src={cokePhoto} alt="coke" className="snack-photo"/>
        </div>
    )
}

export default Coke; 