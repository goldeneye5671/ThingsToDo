import React, { useState } from "react";

function LoginForm() {
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");

	const onCredentialChange = (e) => setCredential(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);

    const onSubmit = (e) => {

    }

	return (
		<div>
			<h2>Login</h2>
			<label htmlFor="">Username or Email</label>
			<input onChange={onCredentialChange} value={credential} type="text" />

			<label htmlFor="">Password</label>
			<input onChange={onPasswordChange} value={password} type="password" name="" id="" />

			<button>Login</button>
			<a>Not a user? Sign up today!</a>
		</div>
	);
}

export default LoginForm;
