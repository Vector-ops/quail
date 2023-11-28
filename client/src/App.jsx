import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<Home />} />
			<Route path="auth/login" element={<LoginPage />} />
			<Route path="auth/signup" element={<SignUpPage />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
