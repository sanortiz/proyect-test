import React from 'react';

export function Example1(params) {
    
    return <p>Hola como estas?</p>;
}

export function Example2(params) {
    return <p>Hey!!</p>
}

function Example3(params) {
    return (
        <div>
            <Example1 />
            <Example2 />
        </div>
    )
}

export default Example3;