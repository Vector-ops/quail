import axios from "axios";

export const homePageLoader = async () => {
	const response = await axios.get(
		`${import.meta.env.VITE_APP_SERVER_URL}/api/books`,
		{
			withCredentials: true,
		}
	);

	return response.data;
};
