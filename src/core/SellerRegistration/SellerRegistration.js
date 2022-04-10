import React, { useState } from "react";
import { signupSeller } from "../../auth";

const SellerRegistration = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		loading: false,
		message: "",
		error: "",
		success: false,
	});

	const { name, email, phone, password, loading, message, error, success } =
		values;

	// load categories and set form data

	const handleChange = (name) => (event) => {
		const value = event.target.value;
		setValues({ ...values, [name]: value });
	};

	const clickSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: "", loading: true });

		signupSeller({ name, email, password }).then((data) => {
			if (data.error) {
				setValues({
					...values,
					error: data.error,
					loading: false,
					message: "",
				});
			} else {
				setValues({
					...values,
					error: "",
					loading: false,
					message: "Seller account created",
					success: true,
				});
			}
		});
	};

	const newPostForm = () => (
		<form className="mb-3" onSubmit={clickSubmit}>
			<div className="row">
				<div className="col-md-12">
					<div className="form-group">
						<label className="text-muted">Name</label>
						<input
							onChange={handleChange("name")}
							type="text"
							className="form-control"
							value={name}
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

			<div className="text-center">
				<button className="btn btn-outline-primary">Register</button>
			</div>
		</form>
	);

	// const showError = () => (
	// 	<div
	// 		className="alert alert-danger"
	// 		style={{ display: error ? "" : "none" }}
	// 	>
	// 		{error}
	// 	</div>
	// );

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
				<h6>Loading...</h6>
			</div>
		);

	const showMessage = () =>
		message?.length !== 0 && (
			<div className="alert alert-success">
				<h6>{message}</h6>
			</div>
		);

	const showError = () =>
		error?.length !== 0 && (
			<div className="alert alert-danger">
				<h6>{error}</h6>
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
						{showMessage()}
						{showError()}
						{newPostForm()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerRegistration;
