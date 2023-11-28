import React from "react";
import ErrorComponent from "../../components/error/ErrorComponent";

const NotFound = () => {
	return (
		<ErrorComponent
			text="Please return to home page."
			message="Oops! This page does not exist"
		/>
	);
};

export default NotFound;
