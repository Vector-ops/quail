import React from "react";
import Button from "../../components/button/Button";
import "./SignUpPage.scss";

const SignUpPage = () => {
	return (
		<div className="app__signup">
			<form className="app__signup-form">
				<h1>Sign Up</h1>
				<div className="app__signup-form-input">
					<input type="text" name="name" placeholder="Name" />
					<input type="text" name="username" placeholder="Username" />
					<input type="email" name="email" placeholder="Email" />
					<input
						type="password"
						name="password"
						placeholder="Password"
					/>
				</div>
				<div className="app__signup-form-button">
					<Button variant="default" text="Sign Up" />
					<Button variant="default" text="Sign up with Google" />
					<p>
						Have an account?
						<a href="/auth/login">Login</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SignUpPage;
