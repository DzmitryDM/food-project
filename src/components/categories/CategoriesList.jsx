import React from "react";
import CategoriesItem from "./CategoriesItem";
import './Categories.css'

function CategoriesList({ catalog }) {
	return (
		<>
      <h1>Category:</h1>
		   <div className="categoriesList">
   			{catalog.map((item) => (
   				<CategoriesItem key={item.idCategory} {...item} />
   			))}
   		</div>
		</>
	);
}

export default CategoriesList;
