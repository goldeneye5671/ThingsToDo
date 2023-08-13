import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBusiness } from "../../store/businessSlice";

function BusinessCreateForm({ setVisible }) {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [primaryPhoto, setPrimaryPhoto] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [stateProvince, setStateProvince] = useState("");
	const [country, setCountry] = useState("");
	const [zipcode, setZipCode] = useState("");
	const [canSubmit, setCanSubmit] = useState(false);

	const onNameChange = (e) => setName(e.target.value);
	const onPhotoChange = (e) => setPrimaryPhoto(e.target.value);
	const onAddressChange = (e) => setAddress(e.target.value);
	const onCityChange = (e) => setCity(e.target.value);
	const onStateProvinceChange = (e) => setStateProvince(e.target.value);
	const onCountryChange = (e) => setCountry(e.target.value);
	const onZipcodeChange = (e) => setZipCode(e.target.value);
	const onCancel = (e) => setVisible(false)

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
				addBusiness({
					name,
					primaryPhoto,
					address,
					city,
					stateProvince,
					country,
					zipcode,
				})
			)
				.then((info) => {
					console.log(info);
					setName("");
					setPrimaryPhoto("");
					setAddress("");
					setCity("");
					setStateProvince("");
					setCountry("");
					setZipCode("");
					setVisible(false);
				})
				.catch((e) => {
					console.error(e);
				});
		}
	};

	return (
		<div>
			<h2>Add Business</h2>
			<form>
				<label htmlFor="businessName">Name of Business</label>
				<input
					onChange={onNameChange}
					value={name}
					type="text"
					name="businessName"
					id="businessName"
				/>
				<br></br><br></br>
				<label htmlFor="businessPhoto">Business Photo Url</label>
				<input
					onChange={onPhotoChange}
					value={primaryPhoto}
					type="text"
					name="businessPhoto"
					id="businessPhoto"
				/>
				<br></br><br></br>
				<label htmlFor="businessAddress">Address</label>
				<input
					onChange={onAddressChange}
					value={address}
					type="text"
					name="businessAddress"
					id="businessAddress"
				/>
				<br></br><br></br>
				<label htmlFor="businessCity">City</label>
				<input
					onChange={onCityChange}
					value={city}
					type="text"
					name="businessCity"
					id="businessCity"
				/>
				<br></br><br></br>
				<label htmlFor="businessStateProvince">State/Province</label>
				<input
					onChange={onStateProvinceChange}
					value={stateProvince}
					type="text"
					name="businessStateProvince"
					id="businessStateProvince"
				/>
				<br></br><br></br>
				<label htmlFor="businessCountry">Country</label>
				<input
					onChange={onCountryChange}
					value={country}
					type="text"
					name="businessCountry"
					id="businessCountry"
				/>
				<br></br><br></br>
				<label htmlFor="businessPostalCode">Postal Code</label>
				<input
					onChange={onZipcodeChange}
					value={zipcode}
					type="text"
					name="businessPostalCode"
					id="businessPostalCode"
				/>
				<br></br><br></br>
				<button onClick={onSubmit}>Submit</button>
				<button onClick={onCancel}>Cancel</button>
			</form>
		</div>
	);
}

export default BusinessCreateForm;
