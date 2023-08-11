import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	updateBusiness,
	allBusinesses,
	deleteBusiness,
} from "../../store/businessSlice";
import { nanoid } from "@reduxjs/toolkit";

function BusinessUpdateForm({ business, setVisible }) {
	const dispatch = useDispatch();
	const [name, setName] = useState(business.name);
	const [primaryPhoto, setPrimaryPhoto] = useState(business.primaryPhoto);
	const [address, setAddress] = useState(business.address);
	const [city, setCity] = useState(business.city);
	const [stateProvince, setStateProvince] = useState(business.stateProvince);
	const [country, setCountry] = useState(business.country);
	const [zipcode, setZipCode] = useState(business.zipcode);
	const [canSubmit, setCanSubmit] = useState(false);

	const onNameChange = (e) => setName(e.target.value);
	const onPhotoChange = (e) => setPrimaryPhoto(e.target.value);
	const onAddressChange = (e) => setAddress(e.target.value);
	const onCityChange = (e) => setCity(e.target.value);
	const onStateProvinceChange = (e) => setStateProvince(e.target.value);
	const onCountryChange = (e) => setCountry(e.target.value);
	const onZipcodeChange = (e) => setZipCode(e.target.value);

	const onCancel = (e) => {
		e.preventDefault();
		setVisible(false);
	};

	const onDelete = (e) => {
		e.preventDefault();
		dispatch(deleteBusiness(business));
		setVisible(false);
	};

	useEffect(() => {
		if (
			name &&
			primaryPhoto &&
			address &&
			city &&
			stateProvince &&
			country &&
			zipcode
		) {
			setCanSubmit(true);
		}
	}, [name, primaryPhoto, address, city, stateProvince, country, zipcode]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (canSubmit) {
			dispatch(
				updateBusiness({
					id: business.id,
					name,
					primaryPhoto,
					address,
					city,
					stateProvince,
					country,
					zipcode,
				})
			);

			setName("");
			setPrimaryPhoto("");
			setAddress("");
			setCity("");
			setStateProvince("");
			setCountry("");
			setZipCode("");
		}
	};

	return (
		<div>
			<h2>Update Business</h2>
			<form>
				<label htmlFor="businessName">Name of Business</label>
				<input
					onChange={onNameChange}
					value={name}
					type="text"
					name="businessName"
					id="businessName"
				/>

				<label htmlFor="businessPhoto">Business Photo Url</label>
				<input
					onChange={onPhotoChange}
					value={primaryPhoto}
					type="text"
					name="businessPhoto"
					id="businessPhoto"
				/>

				<label htmlFor="businessAddress">Address</label>
				<input
					onChange={onAddressChange}
					value={address}
					type="text"
					name="businessAddress"
					id="businessAddress"
				/>

				<label htmlFor="businessCity">City</label>
				<input
					onChange={onCityChange}
					value={city}
					type="text"
					name="businessCity"
					id="businessCity"
				/>

				<label htmlFor="businessStateProvince">State/Province</label>
				<input
					onChange={onStateProvinceChange}
					value={stateProvince}
					type="text"
					name="businessStateProvince"
					id="businessStateProvince"
				/>

				<label htmlFor="businessCountry">Country</label>
				<input
					onChange={onCountryChange}
					value={country}
					type="text"
					name="businessCountry"
					id="businessCountry"
				/>

				<label htmlFor="businessPostalCode">Postal Code</label>
				<input
					onChange={onZipcodeChange}
					value={zipcode}
					type="text"
					name="businessPostalCode"
					id="businessPostalCode"
				/>

				<button onClick={onSubmit}>Submit</button>
				<button onClick={onCancel}>Cancel</button>
				<button onClick={onDelete}>Delete</button>
			</form>
		</div>
	);
}

export default BusinessUpdateForm;
