import axios from "axios";

import { useLoaderData } from "react-router-dom";
import SearchComponent from "../components/search/SearchComponent";

const Favorites = () => {
	const books = useLoaderData();

	return (
		<div className="app__favoutites">
			<SearchComponent data={books} bookmark={true} />
		</div>
	);
};

export default Favorites;
