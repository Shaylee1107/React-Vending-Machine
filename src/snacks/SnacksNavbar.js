import React from 'react';

const SnacksNavbar = ({mySnack}) => {
    const snacks = [
        {snack: 'COKE', color: 'grey', key: 1}, 
        {snack: 'DORITOS', color: 'grey', key: 2}, 
        {snack: 'SNICKERS', color: 'grey', key: 3}, 
        {snack: 'RACOON', color: 'grey', key: 4}
    ];

    // const [currentSnack, setCurrentSnack] = useState(snacks);

    // useEffect(() => {
    //         setCurrentSnack((snacks) => {
    //             const currSnacks = Object.values(snacks).map((s) => {
    //                 if(window.location.href.indexOf(s.snack) > -1){
    //                     s.color = 'hsl(280, 100%, 55%)';
    //                 } 
    //                 return s; 
    //             });
    //             return currSnacks; 
    //         })
    
    return (
        <div style={{textAlign: 'center', marginTop: '10px', backgroundColor: 'hsl(0, 0%, 65%)', marginTop: 0, padding: '10px 0'}}>
            {snacks.map((s) => {
                if(s.snack === mySnack){
                    s.color = 'hsl(280, 100%, 55%)';
                }
                return <h3 style={{color: `${s.color}`, display: 'inline', marginLeft: '20px'}} key={s.key}>{s.snack}</h3>
            })}
        </div>
    )
}

export default SnacksNavbar; 

