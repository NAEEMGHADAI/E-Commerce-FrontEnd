import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../auth';
import { Link, useHistory } from 'react-router-dom';
import { deleteProduct, getProductsForAdmin } from './apiAdmin';
import moment from 'moment';
import { BiSort } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import '../assets/css/ManageProduct.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProductsForAdmin().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const reverseArr = arr => {
    const revArr = arr.reverse();
    return revArr;
  };

  const destroy = productId => {
    deleteProduct(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  const showProduct = product => {
    history.push(`/product/${product}`);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    // <Layout
    //   title="Manage Products"
    //   descripton={`Perform CRUD on products`}
    //   className="container-fluid"
    // >
    <>
      <div class="row justify-content-center rowManageProduct">
        <div class="ManageProductbox shadowManageProduct p-3">
          <div className="row">
            <div className="col-12">
              <h5 className=" ml-2">
                Manage Products ({products.length})
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: '10%', marginLeft: '55%' }}
                  onClick={() => {
                    var newProducts = products;
                    setProducts(reverseArr([...newProducts]));
                  }}
                >
                  Sort By Date
                  <BiSort style={{ paddingTop: '6px' }} size="18" />
                </button>
              </h5>
              <div className="row pl-2">
                <div className="col-md-9 col-6">
                  <Link to={`/create/product`}>
                    <button
                      className="btn btn-outline-primary addPro"
                      style={{ borderRadius: '10%' }}
                    >
                      Add Product
                      <IoMdAdd
                        style={{ paddingTop: '6px' }}
                        size="18"
                        color="blue"
                      />
                    </button>
                  </Link>
                </div>
                <div className="col-md-3 col-6">
                  <Link to={`/create/category`}>
                    <button
                      className="btn btn-outline-warning addCat"
                      style={{ borderRadius: '10%' }}
                    >
                      Add Category
                      <IoMdAdd
                        style={{ paddingTop: '6px' }}
                        size="18"
                        color="yellow"
                      />
                    </button>
                  </Link>
                </div>
              </div>

              <br />

              <div class="table-responsive">
                <table class="table  table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th>Name</th>
                      <th>Creation Date</th>
                      <th>Listed</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((p, i) => (
                      <tr>
                        <td key={i}>
                          <Link
                            className="productLink"
                            onClick={() => showProduct(p._id)}
                            style={{ textDecoration: 'none' }}
                          >
                            <span className="font-weight-normal ">
                              {p.name}
                            </span>
                          </Link>
                        </td>
                        <td>{moment(p.createdAt).format('MMMM Do YYYY')}</td>
                        <td>
                          {p.listed
                            .toString()
                            .replace(
                              /\w\S*/g,
                              txt =>
                                txt.charAt(0).toUpperCase() +
                                txt.substr(1).toLowerCase()
                            )}
                        </td>
                        <td>
                          <Link to={`/admin/product/update/${p._id}`}>
                            <button className="btn btn-sm btn-outline-warning btnSm pl-3 pr-3">
                              Update
                            </button>
                          </Link>
                        </td>

                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger btnSm pl-3 pr-3"
                            onClick={() => destroy(p._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
    // </Layout>
  );
};

export default ManageProducts;
