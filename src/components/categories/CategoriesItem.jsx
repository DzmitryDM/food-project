import React from "react";
import { Link } from "react-router-dom";

function CategoriesItem({
	strCategory,
	strCategoryThumb,
	strCategoryDescription,
}) {
	return (
		<div className="card">
			<div className="card-image">
				<img src={strCategoryThumb} alt={strCategory} />
				<span className="card-title ">{strCategory}</span>
			</div>
			<div className="card-content">
				<span className="card-title ">{strCategory}</span>
				<p>{strCategoryDescription.slice(0, 100)}...</p>
			</div>
			<div className="card-action">
				<Link
					to={`/category/${strCategory}`}
					className="btn #3f51b5 indigo header"
				>
					Watch Category
				</Link>
			</div>
		</div>
	);
}

export default CategoriesItem;
