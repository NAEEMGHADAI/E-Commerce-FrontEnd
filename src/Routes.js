import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import UserRoute from "./auth/UserRoute";
import Dashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import AdminRoute from "./auth/AdminRoute";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import PlaceOrder from "./core/PlaceOrder";
import OrderDetails from "./user/OrderDetails";
import SellerRegistration from "./core/SellerRegistration/SellerRegistration";
import Menu from "./core/Menu";
import Footer from "./core/Footer/Footer";

const Routes = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/shop" exact component={Shop} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/signin" exact component={Signin} />
				<Route path="/product/:productId" exact component={Product} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/seller" exact component={SellerRegistration} />
				<Route path="/checkout" exact component={PlaceOrder} />
				<UserRoute path="/user/dashboard" exact component={Dashboard} />
				<UserRoute path="/profile/:userId" exact component={Profile} />
				<AdminRoute path="/admin/products" exact component={ManageProducts} />
				<AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
				<AdminRoute path="/create/category" exact component={AddCategory} />
				<AdminRoute path="/create/product" exact component={AddProduct} />
				<AdminRoute path="/admin/orders" exact component={Orders} />
				<AdminRoute
					path="/admin/product/update/:productId"
					exact
					component={UpdateProduct}
				/>
				<AdminRoute
					path="/admin/dashboard/:OrderId"
					exact
					component={OrderDetails}
				/>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
