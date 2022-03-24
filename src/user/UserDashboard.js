import React from "react";
import { isAuthenticated } from "../auth";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import "../assets/css/UserDashboard.css";
import PurchaseHistory from "./UserInfo/PurchaseHistory";

const Dashboard = () => {
	const {
		user: { name, role },
	} = isAuthenticated();
	const token = isAuthenticated().token;

	// const userLinks = () => {
	// 	return (
	// 		<div className="card">
	// 			<h4 className="card-header">User Links</h4>
	// 			<ul className="list-group">
	// 				<li className="list-group-item">
	// 					<Link className="nav-link" to="/cart">
	// 						My Cart
	// 					</Link>
	// 				</li>
	// 				<li className="list-group-item">
	// 					<Link className="nav-link" to={`/profile/${_id}`}>
	// 						Update Profile
	// 					</Link>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// };

	// const userInfo = () => {
	// 	return (
	// 		<div className="card mb-5">
	// 			<h3 className="card-header">User Information</h3>
	// 			<ul className="list-group">
	// 				<li className="list-group-item">{name}</li>
	// 				<li className="list-group-item">{email}</li>
	// 				<li className="list-group-item">
	// 					{role === 1 ? "Admin" : "Registered User"}
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// };

	const userLinks = () => {
		return (
			<>
				<div className="container-fluid pt-2">
					<div className="text-center">
						<h3>Welcome, {name}</h3>
						<p>{role === 1 ? "Admin" : "Registered User"}</p>
					</div>
					<Tab.Container
						id="left-tabs-example"
						defaultActiveKey="PurchaseHistory"
					>
						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="PurchaseHistory">
											Purchase History
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content>
									<Tab.Pane eventKey="PurchaseHistory">
										<PurchaseHistory />
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</div>
			</>
		);
	};
	// description={`G'day ${name}!`}
	return (
		// <Layout
		//   title="Dashboard"
		//   descripton={`G'day ${name}!`}
		//   className="container-fluid"
		// >
		<>
			<br />
			<div className="row pt-1">
				<div className="col-md-12 col-12">{userLinks()}</div>
			</div>
		</>
		// </Layout>
	);
};

export default Dashboard;
