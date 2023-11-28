import React from "react";
import Button from "../../components/button/Button";
import "./LoginPage.scss";

const LoginPage = () => {
	return (
		<div className="app__login">
			<form className="app__login-form">
				<h1>Welcome Back!</h1>
				<div className="app__login-form-input">
					<input
						type="email"
						name="email"
						placeholder="Username or email"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
					/>
				</div>
				<div className="app__login-form-button">
					<Button variant="default" text="Sign in" />
					<Button variant="default" text="Login with Google" />
					<p>
						Dont have an account?
						<a href="/auth/signup">Sign up</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
