import React from "react";

function BlissUpdateForm() {
	return (
		<div>
			<h2>Update Bliss</h2>
			<form>
				<label htmlFor="blissName">Bliss Name</label>
				<input type="text" name="blissName" />

				<label htmlFor="blissDescription">Bliss Description</label>
				<textarea name="blissDescription" id="" cols="30" rows="10"></textarea>
			</form>
		</div>
	);
}

export default BlissUpdateForm;
