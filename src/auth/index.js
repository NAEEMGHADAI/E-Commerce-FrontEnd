import { API } from '../config';

export const signup = user => {
  return fetch(`${API}/signup/customer`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};

export const signin = user => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    localStorage.removeItem('t');
    next();
    return fetch(`${API}/signout`, {
      method: 'POST',
      credentials: true,
    })
      .then(response => {
        console.log('signout', response);
      })
      .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};
console.log(isAuthenticated.name);

export const signupSeller = user => {
  return fetch(`${API}/signup/seller`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};
