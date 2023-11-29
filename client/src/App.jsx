import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import RootLayout from "./layouts/RootLayout";
import Catalog from "./pages/Catalog";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={<RootLayout />}
				errorElement={<ErrorPage />}
			>
				<Route index element={<Home />} />
				<Route path="cart" element={<Catalog />} />
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="/auth" errorElement={<ErrorPage />}>
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignUpPage />} />
			</Route>
		</>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
