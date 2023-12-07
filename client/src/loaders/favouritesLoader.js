import axios from "axios";

export const favouritesLoader = async () => {
	const response = await axios.get(
		`${import.meta.env.VITE_APP_SERVER_URL}/api/books/bookmarks`,
		{
			withCredentials: true,
		}
	);

	return response.data;
};
