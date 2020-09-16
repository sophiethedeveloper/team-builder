import React from 'react';

const Card = (props) => {
    return(
        <div className="note-list">
            {props.cards.map(card => (
                <div className="note" key={card.id}>
                    <h2>{card.name}</h2>
                    <p>{card.email}</p>
                    <p>{card.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;