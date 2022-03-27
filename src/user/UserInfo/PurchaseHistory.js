import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../auth";
import { getPurchaseHistory } from "../apiUser";
import moment from "moment";
import { BiSort } from "react-icons/bi";
import "./PurchaseHistory.css";

const PurchaseHistory = () => {
	const [history, setHistory] = useState([]);
	const {
		user: { _id },
	} = isAuthenticated();
	const token = isAuthenticated().token;
	const init = (userId, token) => {
		getPurchaseHistory(userId, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setHistory(data);
			}
		});
	};

	const reverseArr = (arr) => {
		const revArr = arr.reverse();
		return revArr;
	};

	useEffect(() => {
		init(_id, token);
	}, []);
	return (
		<div className="row justify-content-center rowPurchaseHistory">
			<div className="purchaseHistoryBox shadowPurchaseHistory p-3">
				<h3 className="">
					Purchase history{" "}
					<button
						className="btn btn-primary"
						style={{ borderRadius: "10%", marginLeft: "50%" }}
						onClick={() => {
							var newHistory = history;
							setHistory(reverseArr([...newHistory]));
						}}
					>
						Sort By Date
						<BiSort style={{ paddingTop: "6px" }} size="18" />
					</button>
				</h3>

				<div class="table-responsive">
					<table class="table  table-hover">
						<thead className="table-primary">
							<tr>
								<th>Product name</th>
								<th>Product price</th>
								<th>Purchased date</th>
							</tr>
						</thead>
						<tbody>
							{history.map((h, i) => {
								return (
									<>
										{h.products.map((p, i) => {
											return (
												<tr>
													<td> {p.name}</td>
													<td> ₹{p.price}</td>
													<td>{moment(h.createdAt).fromNow()}</td>
												</tr>
											);
										})}
									</>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PurchaseHistory;
