import { API } from "../config";
import queryString from "query-string";

export const getProducts = async (sortBy) => {
	const response = await fetch(`${API}/product`);
	const json = await response.json();
	
	if (!response.ok) {
		return { error: json.message };
	}
	return json.products;
};


export const getCategories = async () => {
	const response = await fetch(`${API}/category`);
	const json = await response.json();
	
	if (!response.ok) {
		return { error: json.message };
	}
	return json.categories;
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
	const data = {
		limit,
		skip,
		filters,
	};
	return fetch(`${API}/products/by/search`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const list = (params) => {
	const query = queryString.stringify(params);
	console.log("query", query);
	return fetch(`${API}/products/search?${query}`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const read = (productId) => {
	return fetch(`${API}/product/${productId}`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getProductById = async (productId) => {
	const response = await fetch(`${API}/product/${productId}`);
	const json = await response.json();
	
	if (!response.ok) {
		return { error: json.message };
	}
	return json.product;
}

export const getRelatedProducts = async (productId) => {
	const response = await fetch(`${API}/product/${productId}`);
	const json = await response.json();
	
	if (!response.ok) {
		return { error: json.message };
	}
	return [json.product];
}

export const listRelated = (productId) => {
	return fetch(`${API}/products/related/${productId}`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
	return fetch(`${API}/braintree/getToken/${userId}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const processPayment = (userId, token, paymentData) => {
	return fetch(`${API}/braintree/payment/${userId}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(paymentData),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const createOrder = (userId, token, createOrderData) => {
	return fetch(`${API}/order/create/${userId}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ order: createOrderData }),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
