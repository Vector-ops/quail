import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorComponent from "../../components/error/ErrorComponent";

const ErrorPage = () => {
	const error = useRouteError();

	console.log(error);

	if (error?.status === 404) {
		return (
			<div>
				<ErrorComponent
					message="Page not found"
					text="Please check the URL or go back to the homepage"
				/>
			</div>
		);
	}

	return (
		<div>
			<ErrorComponent
				message="Something went wrong"
				text="Please refresh the page or try again later"
			/>
		</div>
	);
};

export default ErrorPage;
