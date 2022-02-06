import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import { Navbar, Nav, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import logo from "../assets/img/Logo/logo-3.png";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import colors from "../constants/colors";
import "../assets/css/Menu.css";

// console.log(_id);
const isActive = (history, path) => {
	if (history.location.pathname === path) {
		return {
			color: "#FFFFFF",
			border: "2px #add8e6",
		};
	} else {
		return { color: "#FFFFFF" };
	}
};

const Menu = ({ history }) => {
	if (isAuthenticated()) {
		const {
			user: { _id, name, role },
		} = isAuthenticated();
	}
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};
	// const firstLetter = name.charAt(0).toUpperCase();
	return (
		<>
			<nav className="NavbarItems">
				<h3 className="navbar-logo">Visual Labs</h3>
				<div className="menu-icon" onClick={handleClick}>
					<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
				<ul className={clicked ? "nav-menu active" : "nav-menu"}>
					<Link className="nav-links" style={{ textDecoration: "none" }} to="/">
						Home
					</Link>

					<Link
						className="nav-links"
						style={{ textDecoration: "none" }}
						to="/shop"
					>
						Shop
					</Link>

					<Link
						className="nav-links"
						style={{ textDecoration: "none" }}
						to="/cart"
					>
						<FaShoppingCart
							fontSize="13px"
							className="text-center"
							color="white"
						/>
						&nbsp; Cart
						{itemTotal() !== 0 ? (
							<sup>
								<span
									className="badge badge-pill"
									style={{ background: "#FF6161" }}
								>
									{itemTotal()}
								</span>
							</sup>
						) : null}
					</Link>

					{isAuthenticated() && isAuthenticated().user.role === 0 && (
						<Link
							className="nav-links"
							style={{ textDecoration: "none" }}
							to="/user/dashboard"
						>
							Dashboard
						</Link>
					)}
					{isAuthenticated() && isAuthenticated().user.role === 1 && (
						<Link
							className="nav-links"
							style={{ textDecoration: "none" }}
							to="/admin/dashboard"
						>
							Dashboard
						</Link>
					)}
					{/* isAuthenticated() && isAuthenticated().user.role === 0 && (
						<Link
							className="nav-links"
							// to={`/profile/${_id}`}
						>
							<OverlayTrigger
								overlay={<Tooltip id="tooltip-disabled">Profile</Tooltip>}
								placement="bottom"
							>
								<span>
									<button
										className="btn btn-sm rounded-circle"
										style={{
											backgroundColor: colors["A"],
											color: "white",
										}}
									>
										  A
									</button>
								</span>
							</OverlayTrigger>
						</Link>
					) */}

					{!isAuthenticated() && (
						<>
							<Link to="/signin">
								<button className="btnMenu btn--primary btn--medium">
									Sign In
								</button>
							</Link>

							<Link to="/signup">
								<button className="btnMenu btn--primary btn--medium">
									Sign Up
								</button>
							</Link>
						</>
					)}
					{isAuthenticated() && (
						<div>
							<span
								onClick={() =>
									signout(() => {
										history.push("/");
									})
								}
							>
								<button className="btnMenu btn--primary btn--medium">
									Logout
								</button>
							</span>
						</div>
					)}
				</ul>
			</nav>
		</>
	);
};

export default withRouter(Menu);
