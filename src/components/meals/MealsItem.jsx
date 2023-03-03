import React from "react";
import { Link } from "react-router-dom";

function MealsItem({ strMeal, strMealThumb, idMeal }) {
	return (
		<div className="card">
			<div className="card-image">
				<img src={strMealThumb} alt={strMeal} />
				<span className="card-title ">{strMeal}</span>
			</div>
			<div className="card-content">
				<span className="card-title ">{strMeal}</span>
			</div>
			<div className="card-action">
				<Link to={`/recipe/${idMeal}`} className="btn #3f51b5 indigo header">
					Watch Recipe
				</Link>
			</div>
		</div>
	);
}

export default MealsItem;
