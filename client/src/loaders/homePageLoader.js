import axios from "axios";

export const homePageLoader = async () => {
	const response = await axios.get("http://localhost:3000/api/books", {
		withCredentials: true,
	});

	return response.data;
};
