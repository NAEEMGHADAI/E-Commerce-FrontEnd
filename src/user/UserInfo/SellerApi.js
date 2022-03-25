import React from "react";
import { isAuthenticated } from "../../auth";

const SellerApi = () => {
	const {
		user: { _id, name, role },
	} = isAuthenticated();
	return (
		<div class="row justify-content-center rowAddProduct pt-5">
			<div class="AddProductbox shadowAddProduct p-3">
				<br />

				<div className="row">
					<div className="col-md-10 offset-md-1">
						<h5 className="pl-0">Seller Api</h5>
						<br />
						<h6>Get Api</h6>
						<div className="form-group pl-2">
							<label className="text-muted">Products</label>
							<input
								type="text"
								className="form-control"
								value="GET: https://ecommercewebsite7863.herokuapp.com/api/product/6131f59cd8e33800048cc3c6"
								disabled
							/>
						</div>
						<div className="form-group pl-2">
							<label className="text-muted">Categories</label>
							<input
								type="text"
								className="form-control"
								value="GET: https://ecommercewebsite7863.herokuapp.com/api/categories"
								disabled
							/>
						</div>
						<br />
						<hr />
						<h6>Post Api</h6>
						<div className="form-group pl-2">
							<label className="text-muted">Create Product</label>
							<input
								type="text"
								className="form-control"
								value={`GET: https://ecommercewebsite7863.herokuapp.com/api/product/create/${_id}`}
								disabled
							/>
						</div>
						<div className="form-group pl-2">
							<label className="text-muted">Create Category</label>
							<input
								type="text"
								className="form-control"
								value={`GET: https://ecommercewebsite7863.herokuapp.com/api/category/create/${_id}`}
								disabled
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerApi;
