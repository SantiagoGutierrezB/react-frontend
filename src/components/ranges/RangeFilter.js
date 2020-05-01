import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';
import './rangeFilter.css'

const MySlider = withStyles({
    root: {
      color: "#1724ab",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#1724ab",
      border: "2px solid #1724ab",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      color: "#d8d8d8",
      opacity: 1,
      height: 8,
      borderRadius: 4
    }
})(Slider);

const RangeFilter = ({title, tooltip, from, to, imageFrom, imageTo, step, ranges, setState}) => {    
    
    const handleChange = (event, newValue) => {
        setState(newValue);
    };

    const handleMinInputChange = (event) => {
        if(ranges[0] < from) {
            console.log("You can't select something under the minimum value");
            setState([from, ranges[1]]);
        } else {
            setState([event.target.value === '' ? '' : Number(event.target.value), ranges[1]]);
        }
    };
    
    const handleMaxInputChange = (event) => {
        if(ranges[1] > to) {
            console.log("You can't select something above the maximum value");
            setState([ranges[0], to]);
        } else {
            setState([ranges[0], event.target.value === '' ? '' : Number(event.target.value)]);
        }
    };

    const handleBlur = () => {
        if (ranges[0] < from) {
          setState([from, ranges[1]]);
        } else if (ranges[1] > to) {
          setState([ranges[0], to]);
        }
    };

    return (
        <>
            <div className='rangeContainer'>
                <div>
                    <div className='header'>
                        <h5>{title.toUpperCase()}</h5>
                        <Tooltip title={tooltip} placement='right' arrow>
                            <button className='help'>?</button>
                        </Tooltip>
                    </div>
                    <div className='spaceBetween' style={{display: title === 'quilataje' ? 'flex' : 'none'}}>
                        <img src={imageFrom} alt='' style={{height: '20px'}}></img>
                        <img src={imageTo} alt=''></img>
                    </div>
                    <div className='slider'>
                        <Grid item xs>
                                <MySlider
                                    getAriaLabel={index =>
                                    index === 0 ? "Minimum price" : "Maximum price"
                                    }
                                    defaultValue={[from, to]}
                                    value={ranges}
                                    onChange={handleChange}
                                    min={from}
                                    max={to}
                                    step={step}
                                />
                        </Grid>
                    </div>
                    <div className='spaceBetween'>
                        <Input
                            value={ranges[0]}
                            margin="dense"
                            onChange={handleMinInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: `${step}`,
                                min: `${from}`,
                                max: `${to}`,
                                type: "number",
                                "aria-labelledby": "input-slider"
                            }}
                            className='input'
                        />
                        <Input
                            value={ranges[1]}
                            margin="dense"
                            onChange={handleMaxInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: `${step}`,
                                min: `${from}`,
                                max: `${to}`,
                                type: "number",
                                "aria-labelledby": "input-slider"
                            }}
                            className='input'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RangeFilter;