import React from "react";

const CategoryItem = (props) => {
    const isLastInRow = props.category.id % 6 === 0;
    const categoryClasses = isLastInRow ? 'category-card last-in-row' : 'category-card';
    return(      
        <div className={categoryClasses}>
            <a href={props.category.href}>
                <div className="category-card__image">
                    <img src={props.category.img} alt={props.category.title} />
                </div>
                <div className="category-card__title">
                    <h3>{props.category.title}</h3>
                </div>
            </a>
        </div>
    );
}

export default CategoryItem;