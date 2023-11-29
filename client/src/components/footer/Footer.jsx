import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./Footer.scss";

const Footer = () => {
	const githubRedirect = () => {
		window.location.href = "https://github.com/Vector-ops";
	};
	const linkedinRedirect = () => {
		window.location.href = "https://github.com/Vector-ops";
	};

	return (
		<div className="app__footer">
			<p className="app__footer-text bold">Quail</p>
			<div className="app__footer-links">
				<Button
					variant="circle"
					icon="github"
					type="button"
					handleClick={githubRedirect}
				/>
				<Button
					variant="circle"
					icon="linkedin"
					type="button"
					handleClick={linkedinRedirect}
				/>
			</div>
			<p className="app__footer-text">Made by Vector Ops</p>
		</div>
	);
};

export default Footer;
