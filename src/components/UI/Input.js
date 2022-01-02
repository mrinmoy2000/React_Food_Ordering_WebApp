import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div>
            <label hrmlFor={props.input.id}>{props.label}  </label>
            <input {...props.input}/>
        </div>
    );
};

export default Input;