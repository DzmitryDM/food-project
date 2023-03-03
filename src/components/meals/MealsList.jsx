import React from "react";
import "./Meals.css";
import MealsItem from "./MealsItem";

function MealsList({ food = [] }) {
	return (
		<>
			<h1>Meals:</h1>
			<div className="foodList">
				{food.map((item) => (
					<MealsItem key={item.idMeal} {...item} />
				))}
			</div>
		</>
	);
}

export default MealsList;
