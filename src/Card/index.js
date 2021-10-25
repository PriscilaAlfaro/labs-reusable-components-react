import React from 'react';
import './card.css';


const Card = ({title, image, date, number})=> {
    return (
        <div className="card-container">
            <img className="card-image" src={image} alt="card patron"/>
            <div className="paragraph-container">
            <p>{date.toUpperCase()}</p>
            <p>{number}</p>
            </div>
            <h1 className="card-title">{title}</h1>
        </div>
    );
}

export default Card;
