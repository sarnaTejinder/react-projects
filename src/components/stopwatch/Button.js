import React from 'react'
import './button.css'
function Button(props){
    return(
    <button
     className ={`custom-button ${props.name?props.name:""}`}
    onClick = {props.onClick}
    disabled={props.disabled}
    >{props.children}</button>)
}

export default Button