import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
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
		if (canSubmit) {
			console.log("Submitted and pending review");
		}
	};

	useEffect(() => {
		/**
		 * Need these checks
		 * - Length of fn, ln, email, pw
		 *  -
		 */

		const nameRegex = /^[a-z ,.'-]+$/i;
        const spaceRegex = /\s/

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
		} else if (spaceRegex.test(firstName)){
            localErrors.push("Your first name has a space?")
        }

		if (!lastName.length) {
			localErrors.push("Please enter last name");
		} else if (!nameRegex.test(lastName)) {
			localErrors.push("Please enter a valid last name");
		} else if (spaceRegex.test(lastName)) {
            localErrors.push("Your last name has a space?")
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

		if (localErrors.length) {
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
		<div>
			<form>
				<ul>
					{errors.map((error, i) => (
						<li key={i}>{error}</li>
					))}
				</ul>
				<label htmlFor="">First Name</label>
				<input value={firstName} onChange={onFirstNameChange} type="text" />
                <br></br>

				<label htmlFor="">Last Name</label>
				<input value={lastName} onChange={onLastNameChange} type="text" />
                <br></br>

				<label htmlFor="">Profile Image Url</label>
				<input
					value={profilePicture}
					onChange={onProfilePictureChange}
					type="text"
				/>
                <br></br>

				<label htmlFor="">Bio</label>
				<textarea value={bio} onChange={onBioChange}></textarea>
                <br></br>

				<label htmlFor="">Username</label>
				<input value={username} onChange={onUsernameChange} type="text" />
                <br></br>

				<label htmlFor="">Email</label>
				<input value={email} onChange={onEmailChange} type="email" />
                <br></br>

				<label htmlFor="">Password</label>
				<input value={password} onChange={onPasswordChange} type="password" />
                <br></br>

				<label htmlFor="">Confirm Password</label>
				<input
					value={duplicatePass}
					onChange={onDuplicatePasswordChange}
					type="password"
				/>
                <br></br>

				<button onSubmit={onSubmit} disabled={canSubmit}>
					Sign Up
				</button>
				<p>
					Already have an account? <br></br><Link>Sign in here!</Link>
				</p>
			</form>
		</div>
	);
}

export default SignUp;
