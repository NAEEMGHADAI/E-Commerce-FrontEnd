import React from 'react';
import { isAuthenticated } from '../auth';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Orders from '../admin/Orders';
import ManageProducts from '../admin/ManageProducts';
import SellerApi from '../admin/SellerApi';
import PurchaseHistory from './UserInfo/PurchaseHistory';

const SellerDashboard = () => {
  const {
    user: { name },
  } = isAuthenticated();

  const sellerLinks = () => {
    return (
      <>
        <div className="container-fluid pt-2">
          <div className="text-center">
            <h3>Welcome, {name}</h3>
            <p>Registered Seller</p>
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
                    <Nav.Link eventKey="SellerApi">Seller API</Nav.Link>
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

  // const adminInfo = () => {
  // 	return (
  // 		<div className="card mb-5 pt-5">
  // 			<h3 className="card-header">Admin Information</h3>
  // 			<ul className="list-group">
  // 				<li className="list-group-item"> {name} </li>
  // 				<li className="list-group-item"> {email} </li>
  // 				<li className="list-group-item">
  // 					{" "}
  // 					{role === 1 ? "Admin" : "Registered User"}{" "}
  // 				</li>
  // 			</ul>
  // 		</div>
  // 	);
  // };

  return (
    <>
      <br />
      <div className="row pt-1">
        <div className="col-md-12 col-12">{sellerLinks()}</div>
        {/* <div className="col-9">{adminInfo()}</div> */}
      </div>
    </>
  );
};

export default SellerDashboard;
