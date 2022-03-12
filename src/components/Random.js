import React from "react";

const Random = (getMeal) => {
  console.log(getMeal.data);
  return (
    <>
      <div className="random">
        <div className="card">
          <img src={getMeal.data.strMealThumb} alt="meal" />
          <div className="info">
            <h1>{getMeal.data.strMeal}</h1>
          </div>
          <div className="recipe">
            <h1>Recipe</h1>
            <h2>{getMeal.data.strMeal}</h2>
            <h4>{getMeal.data.strArea}</h4>
            <p>{getMeal.data.strInstructions}</p>
            <span>
              {getMeal.data.strIngredient1} {getMeal.data.strMeasure1}
            </span>
            <span>
              {getMeal.data.strIngredient2} {getMeal.data.strMeasure2}
            </span>
            <span>
              {getMeal.data.strIngredient3} {getMeal.data.strMeasure3}
            </span>
            <span>
              {getMeal.data.strIngredient4} {getMeal.data.strMeasure4}
            </span>
            <span>
              {getMeal.data.strIngredient5} {getMeal.data.strMeasure5}
            </span>
            <span>
              {getMeal.data.strIngredient6} {getMeal.data.strMeasure6}
            </span>
            <span>
              {getMeal.data.strIngredient7} {getMeal.data.strMeasure7}
            </span>
            <span>
              {getMeal.data.strIngredient8} {getMeal.data.strMeasure8}
            </span>
            <span>
              {getMeal.data.strIngredient9} {getMeal.data.strMeasure9}
            </span>
            <span>
              {getMeal.data.strIngredient10} {getMeal.data.strMeasure10}
            </span>
            <span>
              {getMeal.data.strIngredient11} {getMeal.data.strMeasure11}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Random;
