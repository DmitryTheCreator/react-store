import React from "react";
import CardItem from "./CardItem";

const CardList = ({cards}) => {
    return (
        <div className="card__list" style={{margin: '50px auto auto auto'}}>
            {cards.map((card) => 
                <CardItem card={card} key={card.id}/>
            )}
        </div>
    );
}

export default CardList;