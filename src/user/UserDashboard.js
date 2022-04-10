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

	const userLinks = () => {
		return (
			<>
				<div className="container-fluid pt-2">
					<div className="text-center">
						<h3>Welcome, {name}</h3>
						<p>{role === 0 ? "Admin" : "Registered User"}</p>
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
	return (
		<>
			<br />
			<div className="row pt-1">
				<div className="col-md-12 col-12">{userLinks()}</div>
			</div>
		</>
	);
};

export default Dashboard;
