import React from 'react';

const QuoteCard = ({ card }) => {
    return (
        <div>
            <h1>{card.character}</h1>
            <img src={card.image} alt="" />
            <p>{card.quote}</p>
        </div>
    );
}

export default QuoteCard;