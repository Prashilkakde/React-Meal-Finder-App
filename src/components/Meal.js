import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import "../App.css";
import Random from "./Random";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState();
  const [mealvisible, setMealvisible] = useState([]);
  // const [searchBtn, setSearchBtn] = useState(false);
  // const [randomBtn, setRandomBtn] = useState(false);

  function mealData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeal(data.meals);
      });
  }

  function randomDish() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMealvisible(data.meals);
      });
  }

  return (
    <div>
      <div className="main">
        <div className="heading">
          <h1>Meal Finder</h1>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search"
            placeholder="Enter Food name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="searchBtn"
            onClick={() => {
              mealData();
              // setSearchBtn(true);
              setSearch("");
            }}
          >
            Search
          </button>
          <button
            className="randomBtn"
            onClick={() => {
              randomDish();
            }}
          >
            Random
          </button>
        </div>
        <div className="container">
          {meal
            ? meal.map((response) => {
                return <MealItem data={response} />;
              })
            : ""}
        </div>

        {mealvisible.map((list) => {
          return <Random data={list} />;
        })}
      </div>
    </div>
  );
};

export default Meal;
