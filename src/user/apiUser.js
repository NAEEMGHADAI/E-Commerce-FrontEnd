import { API } from "../config";

export const read = async (userId, token) => {
  // return fetch(`${API}/user/`, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((err) => console.log(err));

  const response = await fetch(`${API}/user`, {
    credentials: "include"
  });
	const json = await response.json();
	
	if (!response.ok) {
		return { error: json.message };
	}
	return json.user;
};

export const update = (userId, token, user) => {
  return fetch(`${API}/user/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUser = (user, next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let auth = JSON.parse(localStorage.getItem("jwt"));
      auth.user = user;
      localStorage.setItem("jwt", JSON.stringify(auth));
      next();
    }
  }
};

export const getPurchaseHistory = async (userId, token) => {
  // return fetch(`${API}/purchase/`, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((err) => console.log(err));

  const response = await fetch(`${API}/purchase`);
	const json = await response.json();
	
	if (!response.ok) {
		return { error: json.message };
	}
	return json.purchases;
};
