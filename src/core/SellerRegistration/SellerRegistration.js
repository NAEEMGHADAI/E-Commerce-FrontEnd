import React, { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

const SellerRegistration = () => {
	const [values, setValues] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		password: "",
		address: "",
		loading: false,
		error: "",
	});

	const { fname, lname, email, phone, password, address, loading, error } =
		values;

	// load categories and set form data

	const handleChange = (name) => (event) => {
		const value = event.target.value;
		setValues({ ...values, [name]: value });
	};

	const clickSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: "", loading: true });

		// createProduct(user._id, token, formData).then((data) => {
		// 	if (data.error) {
		// 		setValues({ ...values, error: data.error });
		// 	} else {
		// 		setValues({
		// 			...values,
		// 			name: "",
		// 			description: "",
		// 			photo: "",
		// 			price: "",
		// 			quantity: "",
		// 			loading: false,
		// 			createdProduct: data.name,
		// 			expectedDeliveryDate: "",
		// 		});
		// 	}
		// 	console.log(values);
		// });
	};

	const newPostForm = () => (
		<form className="mb-3" onSubmit={clickSubmit}>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<label className="text-muted">First Name</label>
						<input
							onChange={handleChange("fname")}
							type="text"
							className="form-control"
							value={fname}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="text-muted">Last Name</label>
						<input
							onChange={handleChange("lname")}
							className="form-control"
							value={lname}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<label className="text-muted">Email</label>
						<input
							onChange={handleChange("email")}
							type="email"
							className="form-control"
							value={email}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="text-muted">Phone</label>
						<input
							onChange={handleChange("phone")}
							type="number"
							className="form-control"
							value={phone}
						/>
					</div>
				</div>
			</div>

			<div className="form-group">
				<label className="text-muted">Password</label>
				<input
					onChange={handleChange("password")}
					type="password"
					className="form-control"
					value={password}
				/>
			</div>
			<div className="form-group">
				<label className="text-muted">Address</label>
				<textarea
					onChange={handleChange("address")}
					type="text"
					className="form-control"
					value={address}
				/>
			</div>

			<div className="text-center">
				<button className="btn btn-outline-primary">Register</button>
			</div>
		</form>
	);

	const showError = () => (
		<div
			className="alert alert-danger"
			style={{ display: error ? "" : "none" }}
		>
			{error}
		</div>
	);

	// const showSuccess = () => (
	// 	<div
	// 		className="alert alert-info"
	// 		style={{ display: createdProduct ? "" : "none" }}
	// 	>
	// 		<h2>{`${createdProduct}`} is created!</h2>
	// 	</div>
	// );

	const showLoading = () =>
		loading && (
			<div className="alert alert-success">
				<h2>Loading...</h2>
			</div>
		);

	return (
		<div class="row justify-content-center rowAddProduct pt-5">
			<div class="AddProductbox shadowAddProduct p-3">
				<br />

				<div className="row">
					<div className="col-md-10 offset-md-1">
						<h5 className="pl-0">Seller Registration</h5>
						<br />
						{showLoading()}
						{newPostForm()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerRegistration;
