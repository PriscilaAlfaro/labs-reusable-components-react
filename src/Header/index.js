import React from 'react';
import './header.css';


const Header = ({ title, backgroundColor})=> {
    return (
        <div className="header-container" style={{background: backgroundColor}}>
            <h1 className="header-title">{title}</h1>
            <div className="header-pages">
                <p>about</p>
                <p>trips</p>
                <p>pricing</p>
                <p>contact</p>
            </div>
            <img className="header-image" src="./images/circle.png" alt="yellow circle"/>
        </div>
    );
}

export default Header;
