import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Redirect, Link } from "react-router-dom";
import { read, update, updateUser } from "./apiUser";
import Loader from "../Loader/Loader";
import { FiSend } from "react-icons/fi";
import showPwdImg from "../assets/img/Password/red-eye.png";
import hidePwdImg from "../assets/img/Password/hide.png";

const Profile = ({ match }) => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		error: false,
		loading: false,
		success: false,
	});

	const [message, setMessage] = useState("");
	const [isRevealPwd, setIsRevealPwd] = useState(false);

	const { token } = isAuthenticated();
	const { name, email, password, error, loading, success } = values;

	const init = (userId) => {
		// console.log(userId);
		read(userId, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: true });
			} else {
				setValues({
					...values,
					name: data.name,
					email: data.email,
				});
			}
		});
	};

	useEffect(() => {
		init(match.params.userId);
	}, []);

	const handleChange = (name) => (e) => {
		setValues({ ...values, error: false, [name]: e.target.value });
	};
	const showError = () => (
		<div
			className="alert alert-danger text-center"
			style={{ display: error ? "" : "none" }}
		>
			<img
				src="https://img.icons8.com/office/23/000000/error.png"
				className="mb-1"
				alt="error"
			/>
			&nbsp;
			{error}
		</div>
	);

	const clickSubmit = (e) => {
		e.preventDefault();
		update(match.params.userId, token, { name, email, password }).then(
			(data) => {
				console.log("profile: ", values);
				if (data.error) {
					// console.log(data.error);
					alert(data.error);
					setValues({ ...values, error: data.error, loading: false });
				} else {
					updateUser(data, () => {
						setValues({
							...values,
							name: data.name,
							email: data.email,
							password: data.password,
							success: true,
							loading: true,
						});
					});
				}
			}
		);
	};

	const redirectUser = (success) => {
		if (success) {
			return <Redirect to="/cart" />;
		}
	};

	// <form>
	// 	<div className="form-group">
	// 		<label className="text-muted">Name</label>
	// 		<input
	// 			type="text"
	// 			onChange={handleChange("name")}
	// 			className="form-control"
	// 			value={name}
	// 		/>
	// 	</div>
	// 	<div className="form-group">
	// 		<label className="text-muted">Email</label>
	// 		<input
	// 			type="email"
	// 			onChange={handleChange("email")}
	// 			className="form-control"
	// 			value={email}
	// 		/>
	// 	</div>
	// 	<div className="form-group">
	// 		<label className="text-muted">Password</label>
	// 		<input
	// 			type="password"
	// 			onChange={handleChange("password")}
	// 			className="form-control"
	// 			value={password}
	// 		/>
	// 	</div>
	// 	<br />
	// 	<button onClick={clickSubmit} className="btn btn-primary">
	// 		Submit
	// 	</button>
	// </form>
	const profileUpdate = (name, email, password) => (
		<>
			{loading ? (
				<>
					<Loader />
				</>
			) : (
				<div class="row justify-content-center rowSignin">
					<div class="Signinbox shadowSignin p-4">
						<h4 className="text-center pt-1">Profile Update</h4>

						<div className="col-sm-12 ml-2 mr-5">
							<form>
								{showError()}
								{message && (
									<div className="alert alert-info text-center">
										<img
											src="https://img.icons8.com/ios/24/000000/ok--v1.png"
											alt="success"
										/>
										&nbsp; {message}
									</div>
								)}
								<div className="form-group pt-2">
									<label className="text-muted">Name</label>
									<input
										required
										onChange={handleChange("name")}
										type="text"
										className="form-control"
										value={name}
									/>
								</div>
								<div className="form-group pt-2">
									<label className="text-muted">Email</label>
									<input
										required
										onChange={handleChange("email")}
										type="email"
										className="form-control"
										value={email}
									/>
								</div>

								<div className="form-group pt-2 pwd-container">
									<label className="text-muted">Password</label>
									<input
										required
										onChange={handleChange("password")}
										type={isRevealPwd ? "text" : "password"}
										className="form-control"
										value={password}
									/>
									<img
										height="20px"
										width="20px"
										title={isRevealPwd ? "Hide password" : "Show password"}
										src={isRevealPwd ? hidePwdImg : showPwdImg}
										onClick={() => setIsRevealPwd((prevState) => !prevState)}
										id="input_img"
										alt="eyes"
									/>
								</div>

								<div className="text-center pt-2">
									<button
										type="submit"
										onClick={clickSubmit}
										className="btn  btn-outline-primary"
									>
										Submit <FiSend />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);

	return (
		// <Layout
		//   title="Profile"
		//   descripton={`Update Your Profile.`}
		//   className="container-fluid"
		// >
		<>
			{profileUpdate(name, email, password)}
			{redirectUser(success)}
		</>
		// </Layout>
	);
};

export default Profile;
