import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorComponent from "../../components/error/ErrorComponent";

const ErrorPage = () => {
	const error = useRouteError();

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
				message={error.message || "Something went wrong"}
				text="Please refresh the page or try again later"
				showGithub={error?.status === 500 ? true : false}
			/>
		</div>
	);
};

export default ErrorPage;
