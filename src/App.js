import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

function App() {
	const routers = [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/category/:name",
			element: <Category />,
		},
		{
			path: "/recipe/:id",
			element: <Recipe />,
		},
	];

	const router = createBrowserRouter(routers, {
		basename: "/food-project",
	});

	return (
		<>
			<Header />
			<main className="content">
				<RouterProvider router={router} />
			</main>
			<Footer />
		</>
	);
}

export default App;
