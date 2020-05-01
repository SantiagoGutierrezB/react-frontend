import React from 'react';
import ButtonImg from './ButtonImg';
import './buttonFilter.css';
import Tooltip from '@material-ui/core/Tooltip';

const ButtonFilter = ({title, buttons, tooltip, setState}) => {
    const count = buttons.length;

    const onSelect = (name) => {
        const newButtons = buttons.map((button) => {
            if(button.name === name) {
                return {...button, selected: true}; // ...button --> itera sobre todas las keys de un objeto
            }
            return {...button, selected: false};
        });

        setState(newButtons);
    }
    
    return (
        <>
            <div className='filterContainer'>
                <div className='header'>
                    <h5>{title.toUpperCase()}</h5>
                    <Tooltip title={tooltip} placement='right' arrow>
                        <button className='help'>?</button>
                    </Tooltip>
                </div>
                <div className='btnContainer'>
                    {buttons.map((button, i) => {
                        return(
                            <ButtonImg key={i} src={button.img} label={button.name} size={count} onSelect={onSelect} selected={button.selected} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ButtonFilter;