import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { signInUser } from "../../store/sessionSlice";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css"
import Header from "../shared/Section/headers/Header"
import { useNavigate } from "react-router-dom";

function SignIn() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userState = useSelector(state => state.user.user)
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [canSubmit, setCanSubmit] = useState(false);

	const onCredentialChange = (e) => setCredential(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);

    const onSubmit = (e) => {
		e.preventDefault();
		if (canSubmit) {
			const data = dispatch(signInUser({
				credential,
				password
			})).then(pl => pl?.payload?.user && navigate("/"));
		}else {
			alert("Please fix errors before signing in");
		}
    }

	useEffect(() => {
		if (userState?.user) navigate("/")
		const validEmail =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
			credential
		);
		(validEmail && password.length && credential.length) ? setCanSubmit(true) : setCanSubmit(false);
	}, [credential, password, canSubmit])

	return (
		<div className="parent">
			<form onSubmit={onSubmit} className="auth-container">
				<Header title={<h2>Sign into Bliss</h2>}/>

				<div className="auth-inputs">
					<label htmlFor="Email">Email</label><br></br>
					<input className="standard-input"name="Email" onChange={onCredentialChange} value={credential} type="text" /><br></br>

					<label htmlFor="password">Password</label><br></br>
					<input className="standard-input" name="password" onChange={onPasswordChange} value={password} type="password" id="" /><br></br>

				</div>

				<button type="submit">Login</button><br></br>
				<a>Not a user? Sign up today!</a><br></br>
			</form>
		</div>
	);
}

export default SignIn;
