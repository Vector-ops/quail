import React from "react";
import ErrorComponent from "../../components/error/ErrorComponent";

const ErrorPage = () => {
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
