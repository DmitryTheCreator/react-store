import React from "react";

const CardItem = (props) => {
    return(
        <div className="card">
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
                    <div className="card__counter">
                        <button className="card__down">−</button>
                        <div className="card__сount">1</div>
                        <button className="card__up">+</button>
                    </div>
                    <button className="card__basket">
                        <img src="../icons/basket-shopping-solid.svg" loading="lazy" alt="Добавить в корзину"/>
                    </button>     
                </div>
            </div>                        
        </div>
    );
}

export default CardItem;