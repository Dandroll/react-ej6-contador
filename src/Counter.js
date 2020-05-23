import React, { useState } from 'react';

const Counter = (props) => {
    const [ counter, setCounter] =useState(0);
    const updateCounter = props => setCounter(counter+5);

    return (
        <div className='ui container inverted segment black center'>
            <h1 className='ui huge center aligned blue header' >{props.children}.-{props.author}</h1>
            <div className='ui  huge container inverted segment'>
                <h2 className='ui center aligned red header'>{counter}</h2>
                <button onClick={updateCounter} className='ui button circular primary inverted blue big fluid ' tabindex='0'>Incrementar +5</button>
            </div>
            
        </div>
    );
};

export default Counter;