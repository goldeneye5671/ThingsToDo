import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBliss } from "../../store/blissSlice";

function BlissCreateForm({ setVisible }) {
	const [blissName, setBlissName] = useState("");
	const [blissDescription, setBlissDescription] = useState("");

	const dispatch = useDispatch();

	const onBlissNameChange = (e) => setBlissName(e.target.value);
	const onBlissDescriptionChange = (e) => setBlissDescription(e.target.value)

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addBliss({
				thingName: blissName,
				thingDescription: blissDescription,
			})
		)
			.then(() => {
				setBlissName("");
				setBlissDescription("");
				setVisible(false);
			})
			.catch((e) => {
				console.error(e);
			});
	};

	const onCancel = (e) => {
		e.preventDefault();
		setVisible(false);
	};

	return (
		<div>
			<h2>Add Bliss</h2>
			<form>
				<label htmlFor="blissName">Bliss Name</label>
				<input
					value={blissName}
					onChange={onBlissNameChange}
					type="text"
					name="blissName"
				/>

				<label htmlFor="blissDescription">Bliss Description</label>
				<textarea
					value={blissDescription}
					onChange={onBlissDescriptionChange}
					name="blissDescription"
					id=""
					cols="30"
					rows="10"
				></textarea>

				<button onClick={onSubmit}>Create Bliss</button>
				<button onClick={onCancel}>Cancel</button>
			</form>
		</div>
	);
}

export default BlissCreateForm;
