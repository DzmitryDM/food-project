import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllMealCategories } from "../api";
import Preloader from "../common components/Preloader";
import Search from "../common components/Search";
import CategoriesList from "../components/categories/CategoriesList";

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [catalogFiltered, setCatalogFiltered] = useState([]);

	const { pathname, search } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		getAllMealCategories().then((data) => {
			setCatalog(data.categories);
			setCatalogFiltered(
				search
					? data.categories.filter((item) =>
							item.strCategory
								.toLowerCase()
								.includes(search.split("=")[1].toLowerCase())
					  )
					: data.categories
			);
		});
	}, [search]);

	const handleSearch = (str) => {
		setCatalogFiltered(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		);

		navigate({
			pathname,
			search: `?search=${str}`,
		});
	};

	return (
		<>
			<Search handleSearch={handleSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CategoriesList catalog={catalogFiltered} />
			)}
		</>
	);
}

export default Home;
