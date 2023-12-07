import successImage from "../../assets/success.png";
import Button from "../button/Button";
import "./Success.scss";

const Success = () => {
	return (
		<div className="app__success">
			<img src={successImage} alt="success" />
			<div className="app__success-footer">
				<div className="app__success-footer-text">
					<h1>Thank you for your order</h1>
					<h3>Check your email for order invoice</h3>
				</div>
				<Button
					variant="default"
					type="button"
					text="Conitnue Shopping"
					handleClick={() => (window.location = "/")}
				/>
			</div>
		</div>
	);
};

export default Success;
