import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import "./LoginPage.scss";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setErrorMsg(null);
		if (username === "" || password === "") return;
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_SERVER_URL}/api/auth/login`,
				{
					username: username,
					password: password,
				}
			);
			console.log("Here", response);
			if (response.status === 200) window.open("/", "_self");
		} catch (err) {
			console.error(err);
			setError(err.response.status);
			if (error === 401)
				setErrorMsg("Invalid username, email or password");
			else throw Error(err.response.data.error.message);
		}
	};

	const googleSignin = async () => {
		window.open(
			`${import.meta.env.VITE_APP_SERVER_URL}/api/auth/google`,
			"_self"
		);
	};

	return (
		<div className="app__login">
			<form
				className="app__login-form"
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<h1>Welcome Back!</h1>
				<div className="app__login-form-input">
					<input
						type="text"
						name="email"
						placeholder="Username or email"
						required
						onChange={(e) => {
							setError(null);
							setErrorMsg(null);
							setUsername(e.target.value);
						}}
						value={username}
						style={{
							border:
								errorMsg &&
								errorMsg.includes("email", "username")
									? "2px solid red"
									: "",
						}}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						required
						onChange={(e) => {
							setError(null);
							setErrorMsg(null);
							setPassword(e.target.value);
						}}
						value={password}
						style={{
							border:
								errorMsg && errorMsg.includes("password")
									? "2px solid red"
									: "",
						}}
					/>
					<p className="app__login-form-error">
						{error ? errorMsg : null}
					</p>
				</div>
				<div className="app__login-form-button">
					<Button type="submit" variant="default" text="Sign in" />
					<Button
						variant="default"
						text="Login with Google"
						handleClick={googleSignin}
					/>
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
