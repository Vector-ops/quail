import axios from "axios";

// Create an instance of axios
const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_SERVER_URL, // Your API base URL
	// Other configuration options
});

// Request interceptor - Executes before requests are sent
instance.interceptors.request.use(
	(config) => {
		// You can modify the request config here (e.g., adding headers)
		config.withCredentials = true;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Response interceptor - Executes when responses are received
instance.interceptors.response.use(
	(response) => {
		// You can modify the response data here
		return response;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			// Redirect to login page
			window.location.href = "/auth/login";
		}
		return Promise.reject(error);
	}
);

export default instance;
