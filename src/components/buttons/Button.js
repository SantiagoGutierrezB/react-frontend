import React from 'react';
import './button.css';

const Button = ({title, color, clicked}) => {    
    return (
        <>
            <button type='button' className={`mainBtn ${color}`} onClick={clicked} >{title.toUpperCase()}</button>
        </>
    )
}

export default Button;