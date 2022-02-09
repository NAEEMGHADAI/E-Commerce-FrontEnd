import React, { Fragment, useState } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import { Navbar, Nav, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import logo from "../assets/img/Logo/logo-3.png";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import colors from "../constants/colors";

import { GiHamburgerMenu } from "react-icons/gi";

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
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	// const firstLetter = name.charAt(0).toUpperCase();
	return (
		<>
			<nav className="main-nav" style={{ fontSize: "60px" }}>
				{/* 1st logo part  */}
				<div className="logo">
					<h2>
						<span>V</span>isual
						<span>L</span>abs
					</h2>
				</div>

				{/* 2nd menu part  */}
				<div
					className={
						showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
					}
				>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/shop">Shop</NavLink>
						</li>
						<li>
							<NavLink to="/cart">
								<FaShoppingCart
									fontSize="16px"
									className="text-center"
									color="blue"
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
							</NavLink>
						</li>
						<li>
							{isAuthenticated() && isAuthenticated().user.role === 0 && (
								<NavLink to="/user/dashboard">Dashboard</NavLink>
							)}
						</li>
						<li>
							{isAuthenticated() && isAuthenticated().user.role === 1 && (
								<NavLink to="/user/dashboard">Dashboard</NavLink>
							)}
						</li>

						{!isAuthenticated() && (
							<>
								<li>
									<NavLink to="/signin">
										<button
											style={{ background: "#2874F0", borderRadius: "10%" }}
											className="btn text-white"
										>
											Sign In
										</button>
									</NavLink>
								</li>
								<li>
									<NavLink to="/signup">
										<button
											style={{ background: "#2874F0", borderRadius: "10%" }}
											className="btn text-white"
										>
											Sign Up
										</button>
									</NavLink>
								</li>
							</>
						)}

						<li>
							{isAuthenticated() && (
								<div>
									<span
										onClick={() =>
											signout(() => {
												history.push("/");
											})
										}
									>
										<button
											style={{ background: "#2874F0", borderRadius: "10%" }}
											className="btn text-white"
										>
											Logout
										</button>
									</span>
								</div>
							)}
						</li>
					</ul>
				</div>

				{/* 3rd social media links */}
				<div className="social-media">
					{/* <ul className="social-media-desktop">
						<li>
							<a
								href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
								target="_thapa"
							>
								<FaFacebookSquare className="facebook" />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/thapatechnical/"
								target="_thapa"
							>
								<FaInstagramSquare className="instagram" />
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
								target="_thapa"
							>
								<FaYoutubeSquare className="youtube" />
							</a>
						</li>
					</ul> */}

					{/* hamburget menu start  */}
					<div className="hamburger-menu">
						<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
							<GiHamburgerMenu />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default withRouter(Menu);
