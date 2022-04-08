import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { signout, isAuthenticated, isLoggedIn } from "../auth";
import { itemTotal } from "./cartHelpers";
import { FaShoppingCart } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import colors from "../constants/colors";
import "../assets/css/Menu.css";

// console.log(_id);

const Menu = ({ history }) => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	let firstLetter = "";
	let id = "";
	let user = "";
	if (isLoggedIn()) {
		const {
			user: { _id, name, role },
		} = isLoggedIn();
		firstLetter = name;
		id = _id;
		if (role === 0) {
			user = "user";
		} else {
			user = "admin";
		}
	}

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
							{isAuthenticated() && (
								<NavLink to={`/${user}/dashboard`}>Dashboard</NavLink>
							)}
						</li>

						{!isAuthenticated() && (
							<>
								<li>
									<NavLink to="/signin">
										<button
											style={{ background: "#2874F0", borderRadius: "10%" }}
											className="btn text-white NavBtns"
										>
											Sign In
										</button>
									</NavLink>
								</li>
								<li>
									<NavLink to="/signup">
										<button
											style={{ background: "#2874F0", borderRadius: "10%" }}
											className="btn text-white NavBtns"
										>
											Sign Up
										</button>
									</NavLink>
								</li>
							</>
						)}
						<li>
							{isAuthenticated() && (
								<>
									<NavLink to={`/profile/${id}`}>
										<OverlayTrigger
											overlay={<Tooltip id="tooltip-disabled">Profile</Tooltip>}
											placement="bottom"
										>
											<span className="d-inline-block">
												<button
													className="btn rounded-circle"
													style={{
														backgroundColor:
															colors[firstLetter.charAt(0).toUpperCase()],
														color: "white",
													}}
												>
													{firstLetter.charAt(0).toUpperCase()}
												</button>
											</span>
										</OverlayTrigger>
									</NavLink>
									<div>
										<span
											onClick={() =>
												signout(() => {
													history.push("/");
												})
											}
										>
											<button
												style={{
													background: "#2874F0",
													borderRadius: "10%",
												}}
												className="btn text-white NavBtns"
											>
												Logout
											</button>
										</span>
									</div>
								</>
							)}
						</li>
					</ul>
				</div>

				{/* 3rd social media links */}
				<div className="social-media">
					<ul className="social-media-desktop">
						{/* <li>
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
						</li> */}
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
											style={{
												background: "#2874F0",
												borderRadius: "10%",
											}}
											className="btn text-white "
										>
											Logout
										</button>
									</span>
								</div>
							)}
						</li>
					</ul>

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
