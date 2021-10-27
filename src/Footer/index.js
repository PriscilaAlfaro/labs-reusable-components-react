import React from 'react';
import './footer.css';


const Footer=({color, links})=> {
    return (
        <div className="footer-container" style={{background: color}}>
            <div className="footer-links">
                {links.map(link => <p key={link} className="footer-link">{link}</p>)}
            </div>
            <span className="circle"></span>
            <img className="footer-line" src="./images/pink-line.png" alt="pink line" />
            <img className="footer-blue" src="./images/ellipse-ligth-blue.png" alt="circle ligth blue"/>
            <img className="footer-blue-big" src="./images/ellipse-middle.png" alt="circle ligth blue" />
            <img className="footer-orange" src="./images/ellipse-orange.png" alt="circle orange" />
            <img className="footer-orange-big" src="./images/ellipse-orange.png" alt="circle orange" />

        </div>
    );
}

export default Footer;
