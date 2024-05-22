import React from 'react';
import '../../css/SnacksNavbar.css';

const SnacksNavbar = ({mySnack}) => {
    const snacks = [
        {snack: 'COKE', color: 'grey', key: 1}, 
        {snack: 'DORITOS', color: 'grey', key: 2}, 
        {snack: 'SNICKERS', color: 'grey', key: 3}, 
        {snack: 'RACOON', color: 'grey', key: 4}
    ];
    
    return (
        <div className="snacks-navbar-div">
            {snacks.map((s) => {
                if(s.snack === mySnack){
                    s.color = 'hsl(280, 100%, 55%)';
                }
                return <h3 style={{color: `${s.color}`}} className="snack" key={s.key}>{s.snack}</h3>
            })}
        </div>
    )
}

export default SnacksNavbar; 

