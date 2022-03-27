import React from "react";
import { isAuthenticated } from "../auth";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import "../assets/css/UserDashboard.css";
import PurchaseHistory from "./UserInfo/PurchaseHistory";
import Orders from "../admin/Orders";
import ManageProducts from "../admin/ManageProducts";
import SellerApi from "./UserInfo/SellerApi";

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
						<p>{role === 1 ? "Admin" : "Registered User"}</p>
					</div>
					<Tab.Container id="left-tabs-example" defaultActiveKey="Orders">
						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="Orders">Orders</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="ManageProducts">
											Manage Products
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="SellerApi">Seller Api</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="PurchaseHistory">
											Purchase History
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content>
									<Tab.Pane eventKey="Orders">
										<Orders />
									</Tab.Pane>
									<Tab.Pane eventKey="ManageProducts">
										<ManageProducts />
									</Tab.Pane>
									<Tab.Pane eventKey="SellerApi">
										<SellerApi />
									</Tab.Pane>
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
