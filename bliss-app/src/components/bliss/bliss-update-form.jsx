import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBliss } from "../../store/blissSlice";

function BlissUpdateForm({ setVisible, bliss }) {
	const dispatch = useDispatch()
	
	const [blissName, setBlissName] = useState(bliss.thingName);
	const [blissDescription, setBlissDescription] = useState(
		bliss.thingDescription
	);

	const onBlissNameChange = (e) => setBlissName(e.target.value);
	const onBlissDescriptionChange = (e) => setBlissDescription(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault()
		const err = dispatch(updateBliss({
			thingName: blissName,
			thingDescription: blissDescription
		})).then(() => {
			setVisible(false)
		})
	}

	const onCancel = (e) => {
		e.preventDefault();
		setVisible(false);
	};

	return (
		<div>
			<h2>Update Bliss</h2>
			<form>
				<label htmlFor="blissName">Bliss Name</label>
				<input onChange={onBlissNameChange} value={blissName} type="text" name="blissName" />

				<label htmlFor="blissDescription">Bliss Description</label>
				<textarea
					onChange={onBlissDescriptionChange}
					value={blissDescription}
					name="blissDescription"
					id=""
					cols="30"
					rows="10"
				></textarea>
				<button onClick={onSubmit}>Update</button>
				<button onClick={onCancel}>Cancel</button>
			</form>
		</div>
	);
}

export default BlissUpdateForm;
