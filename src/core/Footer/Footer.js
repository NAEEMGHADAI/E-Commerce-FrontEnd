import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo/Visual-Labs-Logo.png";
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer-section">
			<div className="container-fluid px-5">
				<div className="footer-cta py-5">
					<div className="row">
						<div className="col-sm-6 col-xl-4 mb-30">
							<div className="single-cta">
								<i className="fas fa-map-marker-alt"></i>
								<div className="cta-text">
									<h4>Find Us</h4>
									<span>Patka Manzil, 10 S.V.P Road, Mumbai - 400003</span>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-xl-4 mb-30">
							<div className="single-cta">
								<i className="fas fa-phone"></i>
								<div className="cta-text">
									<h4>Call Us</h4>
									<span>+91 9892100046</span>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-xl-4 mb-30">
							<div className="single-cta">
								<i className="fas fa-envelope-open"></i>
								<div className="cta-text">
									<h4>Mail Us</h4>
									<span>sales@visuallabs.co</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-content py-5">
					<div className="row">
						<div className="col-lg-5 ">
							<div className="footer-widget">
								<div className="footer-logo">
									<a href="/">
										<img src={logo} className="img-fluid" alt="logo" />
									</a>
								</div>
								<div className="footer-text">
									<p>
										At Visual Labs, we build Digital Marketing solutions to help
										your business grow through greater brand visibility and
										improving sales effectiveness through the customer journey
									</p>
								</div>
								<div className="footer-social-icon">
									<span>Follow us</span>
									<a href="/">
										<i className="fab fa-facebook facebook-bg"></i>
									</a>
									<a href="/">
										<i className="fab fa-twitter twitter-bg"></i>
									</a>
									<a href="/">
										<i className="fab fa-instagram instagram-bg"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-2 ">
							<div className="footer-widget">
								<div className="footer-widget-heading">
									<h3>Useful Links</h3>
								</div>
								<ul>
									<li>
										<a href="/">Home</a>
									</li>
									<li>
										<a href="/shop">Shop</a>
									</li>
									<li>
										<a href="/cart">Cart</a>
									</li>
									<li>
										<a href="/">About Us</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5 ">
							<div className="footer-widget">
								<div className="footer-widget-heading">
									<h3>Subscribe</h3>
								</div>
								<div className="footer-text">
									<p>
										Don't miss to subscribe to our new feeds kindly fill the
										form below
									</p>
								</div>
								<div className="subscribe-form">
									<form action="#">
										<input type="text" placeholder="Email Address" />
										<button>
											<i className="fab fa-telegram-plane"></i>
										</button>
									</form>
								</div>
							</div>
							<div className="footer-widget pt-5">
								<div className="footer-widget-heading">
									<h3>Seller Registration</h3>
								</div>
								<div className="footer-text">
									<p>
										To Sell Your Product on Our Website, Resgister Yourself
										<Link to="/seller"> Here</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright-area">
				<div className="container-fluid px-5">
					<div className="row">
						<div className="col-xl-6 col-lg-6 text-center text-lg-left">
							<div className="copyright-text">
								<p>
									Copyright &copy; 2022, All Right Reserved{" "}
									<a href="/">Visual Labs</a>
								</p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 text-right d-none d-lg-block">
							<div className="footer-menu">
								<ul>
									<li>
										<a href="/">Home</a>
									</li>
									<li>
										<a href="/">Terms</a>
									</li>
									<li>
										<a href="/">Privacy</a>
									</li>
									<li>
										<a href="/">Policy</a>
									</li>
									<li>
										<a href="/">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
