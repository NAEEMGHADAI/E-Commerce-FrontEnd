import { API } from "../config";
import jwt_decode from "jwt-decode";

export const signup = (user) => {
	return fetch(`${API}/signup`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signin = (user) => {
	return fetch(`${API}/signin`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const loginUser = async (user) => {
	const response = await fetch(`${API}/auth/login`, { 
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
	const json = await response.json();

	console.log(response)
	console.log('looooool')
	console.log(json)
	console.log('looooool')
	
	if (!response.ok) {
		return { error: json.message };
	}
	return json.token;
}

export const authenticate = (data, next) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("jwt", JSON.stringify(data));
		next();
	}
};

export const signout = (next) => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("jwt");
		next();
		return fetch(`${API}/signout`, {
			method: "GET",
		})
			.then((response) => {
				console.log("signout", response);
			})
			.catch((err) => console.log(err));
	}
};

export const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		return JSON.parse(localStorage.getItem("jwt"));
	} else {
		return false;
	}
};

export const isLoggedIn = () => {
	if (typeof window == "undefined") {
		return false;
	}
	const token = localStorage.getItem("jwt");

	try {
		const decoded = jwt_decode(token);

		const user = { 
			_id: decoded.userId, 
			userRoleId: decoded.userRoleId,
			role: decoded.role,
			name: decoded.firstName,
			exp: decoded.exp,
			iat: decoded.iat,
		}
	
		console.log({user})	
	
		if (decoded) {
			return ({ user })
		} else {
			return false;
		}
	} catch (err) {
		return false;
	}
}

console.log(isAuthenticated.name);
