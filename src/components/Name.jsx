import React from 'react';


function Name(props){
    return <h2>Hi, My name is {props.info.firstName} {props.info.lastName}, I'm {props.info.Age} !</h2>
}

// This way, when import (import Name from 'pathToFile') 
// but when export function we (import {Name} from 'pathToFile') 
export default Name; 
