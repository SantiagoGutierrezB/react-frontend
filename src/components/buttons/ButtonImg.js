import React from 'react';
import './buttonImg.css';

const ButtonImg = ({src, label, size, onSelect, selected}) => {        
    return (
        <>
            <button 
                className={selected ? 'btnSelected' : 'btnUnselected'} 
                onClick={() => {
                    onSelect(label);
                }} 
                style={{width: size === 12 ? '16%' : '24.2%'}}
            >
                <img src={src} alt='img'></img>
                <p>{label}</p>
            </button>
        </>
    )
}

export default ButtonImg;