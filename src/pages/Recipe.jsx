import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import Goback from "../common components/Goback";
import Preloader from "../common components/Preloader";
import "./Recipe.css";

function Recipe() {
	const [recipe, setRecipe] = useState({});

	const { id } = useParams();

	useEffect(() => {
		getMealById(id).then((data) => {
			setRecipe(data.meals[0]);
		});
	}, [id]);

	return (
		<>
			<Goback />
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className="recipe">
					<img
						className="recipeImg"
						src={recipe.strMealThumb}
						alt={recipe.strCategory}
					/>
					<h1>{recipe.strMeal}</h1>
					<h3>Category: {recipe.strCategory}</h3>
					{recipe.strArea && <h4>Country: {recipe.strArea}</h4>}
					<h5>Cooking instructions:</h5>
					<p>{recipe.strInstructions}</p>
					<table className="highlight">
						<thead>
							<tr>
								<th>Ingredient</th>
								<th>Measure</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(recipe).map((el, index) => {
								if (el.includes("Ingredient") && recipe[el]) {
									return (
										<tr key={index}>
											<td>{recipe[el]}</td>
											<td>{recipe[`strMeasure${el.slice(13)}`]}</td>
										</tr>
									);
								}
								return null;
							})}
						</tbody>
					</table>

					{recipe.strYoutube && (
						<div>
							<h5>{recipe.strCategory}</h5>
							<iframe
								title={recipe.strCategory}
								src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
									-11
								)}`}
								allowFullScreen
							/>
						</div>
					)}
				</div>
			)}
		</>
	);
}

export default Recipe;
