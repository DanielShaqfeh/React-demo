import React from 'react';

// Multipple components
export function Car(props) {
  return <h4>BMW M5 Compitition Car</h4>;
}

export function Bike() {
  return <h4>BMW F 800 GS Bike</h4>;
}

export function Bus() {
  return <h4>Marcedes-Benz Citaro</h4>;
}

export function Garage(){
    return(
       <div>
        <h2>Available Cars At Garage </h2>
        {/* Find a Solution not to use (pl) to show bullet points */}
        <ul className='list-disc pl-5'> 
            <li><Car/></li>
            <li><Bus/></li>
            <li><Bike/></li>
        </ul>  
       </div>
    );
}
