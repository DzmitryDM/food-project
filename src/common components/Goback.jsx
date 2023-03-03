import React from "react";
import { useNavigate } from "react-router-dom";
import './Common.css'

function Goback() {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="goBack">
			<i className="material-icons" onClick={goBack}>
				arrow_back
			</i>
		</div>
	);
}

export default Goback;
