import React from "react";

function Footer() {
	return (
		<footer className="page-footer #3f51b5 indigo header">
			<div className="footer-copyright">
				<div className="container">
					{new Date().getFullYear()} Copyright Text
				</div>
			</div>
		</footer>
	);
}

export default Footer;
