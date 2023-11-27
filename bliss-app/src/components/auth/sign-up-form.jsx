import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../store/sessionSlice";
import Header from "../shared/Section/headers/Header";

function SignUp() {
	const navigate = useNavigate();

	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [profilePicture, setProfilePicture] = useState("");
	const [bio, setBio] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [duplicatePass, setDuplicatePass] = useState("");

	const [errors, setErrors] = useState([]);
	const [canSubmit, setCanSubmit] = useState(false);

	const dispatch = useDispatch();

	const onFirstNameChange = (e) => setFirstname(e.target.value);
	const onLastNameChange = (e) => setLastname(e.target.value);
	const onProfilePictureChange = (e) => setProfilePicture(e.target.value);
	const onBioChange = (e) => setBio(e.target.value);
	const onUsernameChange = (e) => setUsername(e.target.value);
	const onEmailChange = (e) => setEmail(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);
	const onDuplicatePasswordChange = (e) => setDuplicatePass(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log("Clicked")
		if (canSubmit) {
			dispatch(
				signUpUser({
					firstName,
					lastName,
					profilePicture,
					bio,
					username,
					email,
					password,
				})
			).then((data) => {
				navigate("/sign-in");
			})
			.catch(async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			});
		}
	};

	useEffect(() => {

		const nameRegex = /^[a-z ,.'-]+$/i;
		const spaceRegex = /\s/;

		const validEmail =
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
				email
			);
		const validPassword =
			/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
				password
			);

		const localErrors = [];

		if (!firstName.length) {
			localErrors.push("Please enter first name");
		} else if (!nameRegex.test(firstName)) {
			localErrors.push("Please enter a valid first name");
		} else if (spaceRegex.test(firstName)) {
			localErrors.push("Your first name has a space?");
		}

		if (!lastName.length) {
			localErrors.push("Please enter last name");
		} else if (!nameRegex.test(lastName)) {
			localErrors.push("Please enter a valid last name");
		} else if (spaceRegex.test(lastName)) {
			localErrors.push("Your last name has a space?");
		}

		if (!email.length) {
			localErrors.push("Please enter an email");
		} else if (!validEmail) {
			localErrors.push("Please enter a valid email");
		}
		if (!username.length) localErrors.push("Please enter a username");
		if (!password.length) {
			localErrors.push("Please enter a password");
		} else if (!validPassword) {
			localErrors.push(
				"Please enter a password with at least 1 uppercase letter, 1 lowercase letter, 1 number, and one special character"
			);
		}
		if (!duplicatePass.length) localErrors.push("Please re-enter password");
		if (password !== duplicatePass) localErrors.push("Passwords do not match");
		setErrors([...localErrors]);

		if (localErrors.length === 0) {
			setCanSubmit(true);
		} else {
			setCanSubmit(false);
		}
	}, [
		firstName,
		lastName,
		profilePicture,
		bio,
		username,
		email,
		password,
		duplicatePass,
	]);

	return (
		<div className="auth-container">
			<Header title={<h2>Sign up</h2>} />
			<form onSubmit={onSubmit} className="auth-container-flex">
				<div style={
					{
						display: "flex",
						justifyContent: "space-around"
					}
				}>
					<div>
						<div className="test-label-container">
							<input
								className={"test-input-styling"}
								value={firstName}
								onChange={onFirstNameChange}
								type="text"
								placeholder=""
							/>
							<label className={"test-label-styling"} htmlFor="">First Name</label>
						</div>
						{<p>{errors.find(e => e.toLowerCase() === "please enter first name")}</p>}
						{<p>{errors.find(e => e.toLowerCase() === "your first name has a space?")}</p>}
						{<p>{errors.find(e => e.toLowerCase() === "please enter a valid first name")}</p>}

						<div className="test-label-container">
							<input className="test-input-styling" value={lastName} onChange={onLastNameChange} type="text" placeholder="" />
							<label className='test-label-styling' htmlFor="">Last Name</label>
						</div>
						{<p>{errors.find(e => e.toLowerCase() === "please enter last name")}</p>}
						{<p>{errors.find(e => e.toLowerCase() === "please enter a valid last name")}</p>}
						{<p>{errors.find(e => e.toLowerCase() === "your last name has a space?")}</p>}

						<div className="test-label-container">
							<input
								value={profilePicture}
								onChange={onProfilePictureChange}
								type="text"
								className="test-input-styling"
								placeholder=""
							/>
							<label className="test-label-styling" htmlFor="">Profile Image Url</label>
						</div>
						<div className="test-label-container">
							<label className="test-label-styling" htmlFor="">Bio</label>
							<textarea className="test-input-styling" placeholder="" value={bio} onChange={onBioChange}></textarea>
						</div>
					</div>
					<div>
						<div className="test-label-container">
							<input className="test-input-styling" value={username} onChange={onUsernameChange} type="text" placeholder=""/>
							<label className="test-label-styling" htmlFor="">Username</label>
						</div>
						{<p>{errors.find(e => e.toLowerCase() === "please enter a username")}</p>}
						<div className="test-label-container">
							<input className='test-input-styling' value={email} onChange={onEmailChange} type="email" placeholder=""/>
							<label className='test-label-styling' htmlFor="">Email</label>
						</div>
						{<p>{errors.find(e => e.toLowerCase() === "please enter an email")}</p>}
						<div className="test-label-container">
							<input
								className="test-input-styling"
								value={password}
								onChange={onPasswordChange}
								type="password"
								placeholder=""
							/>
							<label className="test-label-styling" htmlFor="">Password</label>
						</div>
						{<p>{errors.find(e => e.toLowerCase() === "please enter a password")}</p>}
						<div className="test-label-container">
							<input
								className="test-input-styling"
								value={duplicatePass}
								onChange={onDuplicatePasswordChange}
								type="password"
								placeholder=""
							/>
							<label className="test-label-styling" htmlFor="">Confirm Password</label>
						</div>
						{<p>{errors.find(e => e.toLowerCase() === "passwords do not match")}</p>}
					</div>
				</div>
			<button type={"submit"}>Sign Up</button>
			</form>
			<p>
				Already have an account? <br></br>
				<Link>Sign in here!</Link>
			</p>
		</div>
	);
}

export default SignUp;
