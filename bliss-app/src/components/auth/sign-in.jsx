import React, { useEffect, useState } from "react";

function SignIn() {
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");

	const onCredentialChange = (e) => setCredential(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);

    const onSubmit = (e) => {

    }

	useEffect(() => {
		const validEmail =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
			credential
		);
	})

	return (
		<div>
			<h2>Sign into Bliss</h2>
			<label htmlFor="Email">Email</label><br></br>
			<input name="Email" onChange={onCredentialChange} value={credential} type="text" /><br></br>

			<label htmlFor="password">Password</label><br></br>
			<input name="password" onChange={onPasswordChange} value={password} type="password" id="" /><br></br>

			<button>Login</button><br></br>
			<a>Not a user? Sign up today!</a><br></br>
		</div>
	);
}

export default SignIn;
