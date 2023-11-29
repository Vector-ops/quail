import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const RootLayout = () => {
	return (
		<div style={{ height: "100%" }}>
			<Header />

			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default RootLayout;
