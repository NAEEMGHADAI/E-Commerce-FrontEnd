import React, { useState } from "react";
import { isAuthenticated } from "../auth";
import { createCategory } from "./apiAdmin";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import "../assets/css/AddCategory.css";

const AddCategory = () => {
	const [name, setName] = useState("");
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	//destructure user and token from localStorage
	const { user, token } = isAuthenticated();

	const handleChange = (e) => {
		setError("");
		setName(e.target.value);
	};

	const clickSubmit = (e) => {
		e.preventDefault();
		setError("");
		setSuccess(false);
		//make request to api to create Category
		createCategory(user._id, token, { name }).then((data) => {
			if (data.error) {
				setError(true);
			} else {
				setError("");
				setSuccess(true);
			}
		});
	};

	const newCategoryForm = () => (
		<form onSubmit={clickSubmit}>
			<div className="form-group">
				<label className="text-muted">Name</label>
				<input
					type="text"
					className="form-control"
					onChange={handleChange}
					value={name}
					autoFocus
					required
				/>
			</div>
			<br />
			<div className="text-center">
				<button className="btn btn-outline-primary">
					<span>Create Category &nbsp;</span>
					<AiOutlinePlusCircle size="18" style={{ marginTop: "6px" }} />
				</button>
			</div>
		</form>
	);

	const showSuccess = () => {
		if (success) {
			return (
				<div className="alert alert-info text-center">
					<img
						src="https://img.icons8.com/ios/24/000000/ok--v1.png"
						alt="success"
					/>
					&nbsp; {name} Successfully Created
				</div>
			);
		}
	};
	const showError = () => {
		if (error) {
			return (
				<div className="alert alert-danger text-center">
					<img
						src="https://img.icons8.com/office/23/000000/error.png"
						className="mb-1"
						alt="error"
					/>
					&nbsp; Category Should be Unique
				</div>
			);
		}
	};

	return (
		<div class="row justify-content-center rowAddCategory pt-5">
			<div class="AddCategorybox shadowAddCategory p-3">
				<br />
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<div className="row">
							<div className="col-md-10">
								<h5 className="pl-0">Create New Category Here...</h5>
							</div>
							<div className="col-md-2">
								<Link to={`/create/product`}>
									<button
										className="btn btn-outline-primary"
										style={{ borderRadius: "10%" }}
									>
										Add Product
										<IoMdAdd
											style={{ paddingTop: "6px" }}
											size="18"
											color="blue"
										/>
									</button>
								</Link>
							</div>
						</div>
						<br />
						{showSuccess()}
						{showError()}
						{newCategoryForm()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddCategory;
