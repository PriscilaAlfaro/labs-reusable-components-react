import React from 'react';
import './cookieAlert.css';

const CookieAlert = ({ text, textColor, backgroundColor})=>{
    return (
        <div className="cookieAlert-container" style={{ color: textColor, background: backgroundColor }}>
            <p className="cookieAlert-text">{text}</p>
        </div>
    );
}

export default CookieAlert;


