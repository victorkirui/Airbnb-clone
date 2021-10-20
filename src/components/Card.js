import React from 'react';
import './Card.css';

function Card({src,title,description,price}) {
    return (
        <div className="card">
            <img src={src} alt="" />
            <div className="card_info">
                <h3>{title}</h3>
                <p>{description}</p>
                <h5>{price}</h5>
            </div> 
        </div>
    )
}

export default Card
