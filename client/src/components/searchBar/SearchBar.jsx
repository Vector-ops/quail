import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleClick, loc }) => {
	const [search, setSearch] = useState("");

	let iconClass = "app__searchbar-icon";

	if (loc === "home") {
		iconClass += " icon-home";
	} else {
		iconClass += " icon-search";
	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleClick(search);
		}
	};

	return (
		<div className="app__searchbar">
			<input
				type="text"
				placeholder="Type the name of book or author..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyPress}
			/>
			<MagnifyingGlass
				size={32}
				className={iconClass}
				onClick={() => handleClick(search)}
			/>
		</div>
	);
};

export default SearchBar;
