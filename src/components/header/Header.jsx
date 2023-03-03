import React from "react";
import "./Header.css";

function Header() {
	return (
		<nav className=" #3f51b5 indigo header">
			<div className="nav-wrapper ">
				<a
					href="https://dzmitrydm.github.io/food-project"
					className="brand-logo"
				>
					Food
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href=" https://github.com/DzmitryDM/food-project">Repositories</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
