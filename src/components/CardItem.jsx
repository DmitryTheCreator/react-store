import React from "react";
import Counter from "./Counter";

const CardItem = (props) => {
    const isLastInRow = props.card.id % 4 === 0;
    const cardClasses = isLastInRow ? 'card last-in-row' : 'card';
    return(
        <div className={cardClasses}>
            <div className="card__content">
                <div className="card__img">
                    <img src={props.card.img} loading="lazy" alt={props.card.desc}/>
                </div>               
                <div className="card__desc">
                    {props.card.desc}
                </div>
            </div>
            <div className="card__bottom">
                <div className="card__price">{props.card.price}</div>
                <div className="card__buttons">
                    <Counter />
                    <button className="card__basket">
                        <img src="../icons/basket.svg" loading="lazy" alt="Добавить в корзину"/>
                    </button>     
                </div>
            </div>                        
        </div>
    );
}

export default CardItem;