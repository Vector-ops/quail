import axios from "axios";

export const favouritesLoader = async () => {
	const response = await axios.get(
		"http://localhost:3000/api/books/bookmarks",
		{
			withCredentials: true,
		}
	);

	return response.data;
};
