import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getFilterByCategory } from "../api";
import Goback from "../common components/Goback";
import Pagination from "../common components/Pagination";
import Preloader from "../common components/Preloader";
import Search from "../common components/Search";
import MealsList from "../components/meals/MealsList";

function Category() {
	const [food, setFood] = useState([]);
	const [foodSearch, setFoodSearch] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(8);

	const { name } = useParams();

	const navigate = useNavigate();
	const { pathname, search } = useLocation();

	const lastCount = pageSize * currentPage;
	const firstCount = lastCount - pageSize;
	const currentMealList = foodSearch.slice(firstCount, lastCount);

	const onPageCount = (count) => {
		setCurrentPage(count);
	};

	useEffect(() => {
		getFilterByCategory(name).then((data) => {
			setFood(data.meals);
			setFoodSearch(
				search
					? data.meals.filter((el) =>
							el.strMeal
								.toLowerCase()
								.includes(search.split("=")[1].toLowerCase())
					  )
					: data.meals
			);
		});
	}, [name, search]);

	const handleSearch = (str) => {
		setFoodSearch(
			food.filter((el) => el.strMeal.toLowerCase().includes(str.toLowerCase()))
		);
		navigate({
			pathname,
			search: `?search=${str}`,
		});
	};

	return (
		<>
			<Goback />
			<Search handleSearch={handleSearch} />
			{!food.length ? <Preloader /> : <MealsList food={currentMealList} />}
			<Pagination
				totalCount={food.length}
				currentPage={currentPage}
				pageSize={pageSize}
				onPageCount={onPageCount}
			/>
		</>
	);
}

export default Category;
