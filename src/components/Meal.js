import React, { useState } from "react";
import MealItem from "./MealItem";
import "../App.css";
import Random from "./Random";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState();
  const [mealvisible, setMealvisible] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function mealData() {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        if (data.meals === null) {
          setError(true);
          setMeal("");
        } else {
          setMeal(data.meals);
          setError(false);
        }
      });
  }

  function randomDish() {
    setLoading(true);

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);

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
              if (search) {
                setMealvisible([]);
                mealData();

                setSearch("");
              }
            }}
          >
            Search
          </button>
          <button
            className="randomBtn"
            onClick={() => {
              setMeal("");
              setError(false);
              setLoading(true);
              randomDish();
            }}
          >
            Random
          </button>
        </div>
        {loading ? (
          <h1 style={{ color: "white", textAlign: "center" }}>Loading.....</h1>
        ) : (
          ""
        )}
        <div className="container">
          {error ? <h1 style={{ color: "red" }}>Recipe Not Found</h1> : ""}

          {meal
            ? meal.map((response) => {
                return <MealItem data={response} />;
              })
            : ""}

          {mealvisible.map((list) => {
            return <Random data={list} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Meal;
