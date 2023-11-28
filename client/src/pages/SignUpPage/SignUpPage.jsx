import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./SignUpPage.scss";

const SignUpPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [errorMsg, setErrorMsg] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setErrorMsg(null);
		if (username === "" || password === "" || name === "" || email === "")
			return;
		try {
			const response = await axios.post(
				"http://localhost:3000/api/auth/signup",
				{
					username: username,
					password: password,
					email: email,
					name: name,
				}
			);
			console.log(response);
			if (response.status === 200) window.open("/auth/login", "_self");
		} catch (err) {
			console.error(err);
			setError(err.response.status);
			setErrorMsg(err.response.data.error.message);
		}
	};

	return (
		<div className="app__signup">
			<form
				className="app__signup-form"
				onSubmit={handleSubmit}
				autoComplete="off"
			>
				<h1>Sign Up</h1>
				<div className="app__signup-form-input">
					<input
						type="text"
						name="name"
						placeholder="Name"
						required
						onChange={(e) => {
							setError(null);
							setErrorMsg(null);
							setName(e.target.value);
						}}
						value={name}
					/>
					<input
						type="text"
						name="username"
						placeholder="Username"
						required
						onChange={(e) => {
							setError(null);
							setErrorMsg(null);
							setUsername(e.target.value);
						}}
						value={username}
						style={{
							border:
								errorMsg && errorMsg.includes("username")
									? "2px solid red"
									: "",
						}}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						required
						onChange={(e) => {
							setError(null);
							setErrorMsg(null);
							setEmail(e.target.value);
						}}
						value={email}
						style={{
							border:
								errorMsg && errorMsg.includes("email")
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
								errorMsg && errorMsg.includes("Password")
									? "2px solid red"
									: "",
						}}
					/>
					<p className="app__signup-form-error">
						{error ? errorMsg : null}
					</p>
				</div>
				<div className="app__signup-form-button">
					<Button type="submit" variant="default" text="Sign Up" />
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
