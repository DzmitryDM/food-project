import React, { useState } from "react";

function Search({ handleSearch = Function.prototype }) {
	const [value, setValue] = useState("");

	const onChangeSearch = (e) => {
		setValue(e.target.value);
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};
	const handleSubmit = () => {
		handleSearch(value);
		setValue("");
	};

	return (
		<div className="row">
			<div className="input-field col s6">
				<input
					placeholder="Search"
					type="text"
					onKeyDown={onKeyDown}
					onChange={onChangeSearch}
					value={value}
				/>
				<button onClick={handleSubmit} className="btn #3f51b5 indigo">
					Search
				</button>
			</div>
		</div>
	);
}

export default Search;
