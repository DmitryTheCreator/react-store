import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({categories}) => {
    return (
        <div className="category__list" style={{marginTop: "35px"}}>
            {categories.map((category) => 
                <CategoryItem category={category} key={category.id}/>
            )}
        </div>
    );
}

export default CategoryList;