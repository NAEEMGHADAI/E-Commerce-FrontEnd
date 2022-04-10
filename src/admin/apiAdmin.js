import { API } from '../config';

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify(category),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateCategory = (categoryId, userId, token, category) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: 'PUT',
    headers: {
      // content type?
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const createProduct = (userId, token, product) => {
  console.log(product.get('photo'));
  console.log('hehe');
  console.log(product);
  console.log('hehe');
  return fetch(`${API}/product/create/${userId}`, {
    method: 'POST',
    headers: {
      // Accept: 'application/form-data',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    body: product,
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};

// export const createProduct = (userId, token, product) => {
//   const myData = new FormData();
//   myData.append(product.)

//   return fetch(`${API}/product/create/${userId}`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/form-data',
//       Authorization: `Bearer ${token}`,
//     },
//     credentials: 'include',
//     body: product,
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

export const getCategory = categoryId => {
  return fetch(`${API}/category/${categoryId}`, {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listOrders = (userId, token) => {
  return fetch(`${API}/order/list/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};

export const listOrdersForSeller = (sellerId, token) => {
  return fetch(`${API}/order/list/seller/${sellerId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};

export const getStatusValues = (userId, token) => {
  return fetch(`${API}/order/status-values/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => {
  return fetch(`${API}/order/${orderId}/status/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({ status, orderId }),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => {
  return fetch(`${API}/products?limit=undefined`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getProductsForSeller = sellerId => {
  return fetch(`${API}/products/${sellerId}/all`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};

export const getProductsForAdmin = () => {
  return fetch(`${API}/products/admin`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      return { error: err.message };
    });
};

export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    body: product,
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
