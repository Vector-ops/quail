import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchComponent from "../components/search/SearchComponent";

const Favorites = () => {
	// const [bookmarks, setBookmarks] = useState([]);
	// const [loading, setLoading] = useState(false);

	const books = useLoaderData();

	return (
		<div className="app__favoutites">
			<SearchComponent data={books} bookmark={true} />
		</div>
	);
};

export default Favorites;
