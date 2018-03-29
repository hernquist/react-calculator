import React from 'react';

const NumberInput = (props) => {
    return <div>
        <input 
            value={props.value} 
            onChange={(event)=>props.handleInput(event, props.id)}/>
    </div>
}

export default NumberInput;