import { MagnifyingGlass } from "@phosphor-icons/react";
import "./SearchBar.scss";

//<MagnifyingGlass size={32} />

const SearchBar = () => {
	return (
		<div className="app__searchbar">
			<input
				type="text"
				placeholder="Type the name of book or author..."
			/>
			<MagnifyingGlass size={32} className="app__searchbar-icon" />
		</div>
	);
};

export default SearchBar;
