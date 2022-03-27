import React from "react";
import "../assets/css/Users.css";

const Users = () => {
	return (
		<div class="row justify-content-center rowUsers">
			<div class="rowUsersBox shadowRowUsers p-3">
				<div className="row">
					<div className="col-12">
						<h5 className=" ml-2">Manage Users</h5>
						<div class="table-responsive">
							<table class="table table-hover">
								<thead className="table-primary">
									<tr>
										<th>Name</th>
										<th>Creation Date</th>
										<th>Status Update</th>
										<th>Delete</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>Naeem</td>
										<td>August 26th 2021</td>
										<td>
											<button className="btn btn-sm btn-outline-primary btnSm pl-3 pr-3">
												Admin
											</button>
											&nbsp; &nbsp;
											<button className="btn btn-sm btn-outline-warning btnSm pl-3 pr-3">
												Seller
											</button>
										</td>
										<td>
											<button className="btn btn-sm btn-outline-danger btnSm pl-3 pr-3">
												Delete
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
