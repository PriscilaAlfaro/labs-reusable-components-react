import React from 'react';
import './button.css';


const Button = ({ disabled, buttonText, textColor, buttonColor, setDisable})=> {
    
    const handleDisable=()=>{
        setDisable(true)
    }

    return (
        <button className={`button-button ${disabled ? "disable" : ""}`} onClick={handleDisable} style={{ color: textColor, background: buttonColor}}>{buttonText}</button>
    );
}

export default Button;
