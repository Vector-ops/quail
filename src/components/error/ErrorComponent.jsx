import React from "react";
import error from "../../assets/error-gif.png";
import Button from "../button/Button";
import "./ErrorComponent.scss";

const ErrorComponent = ({ message, text, showGithub }) => {
	const githubRedirect = () => {
		window.location.href = "https://github.com/Vector-ops";
	};
	const homePageRedirect = () => {
		window.location.href = "/";
	};

	showGithub = showGithub === null ? true : showGithub;

	return (
		<div className="app__error-page">
			<img src={error} alt="Error" />
			<h1>{message}</h1>
			<p className="app__error-page-suggestion">{text}</p>
			<Button
				text="Go back to Home"
				type="button"
				variant="default"
				handleClick={homePageRedirect}
			/>
			{showGithub && (
				<div className="app__error-page-footer">
					<Button
						variant="circle"
						type="button"
						icon="github"
						handleClick={githubRedirect}
					></Button>
					<p>
						Are you a dev? You can register an issue on github,{" "}
						<br /> if you want to contribute to this project.
					</p>
				</div>
			)}
		</div>
	);
};

export default ErrorComponent;
