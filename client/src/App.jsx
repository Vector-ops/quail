import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Components
import Success from "./components/success/Success";

// Loaders
import { favouritesLoader } from "./loaders/favouritesLoader";
import { homePageLoader } from "./loaders/homePageLoader";

// Pages
import Catalog from "./pages/Catalog";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Favourites from "./pages/Favorites";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/ProductDetail";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={<RootLayout />}
				errorElement={<ErrorPage />}
			>
				<Route index element={<Home />} loader={homePageLoader} />
				<Route path="book/:bookId" element={<ProductDetail />} />
				<Route path="search/:search" element={<Catalog />} />
				<Route
					path="favourites"
					element={<Favourites />}
					loader={favouritesLoader}
				/>
				<Route path="favourites/:search" element={<Favourites />} />
				<Route path="success" element={<Success />} />
			</Route>
			<Route path="/auth" errorElement={<ErrorPage />}>
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignUpPage />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
