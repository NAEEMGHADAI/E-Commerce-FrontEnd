import React from 'react';
import { isAuthenticated } from '../auth';

const SellerApi = () => {
  const {
    user: { _id, userRoleId },
  } = isAuthenticated();

  return (
    <div class="row justify-content-center rowUsers">
      <div class="rowUsersBox shadowRowUsers p-3">
        <div className="row">
          <div className="col-12">
            <h5 className=" ml-2">API Endpoints</h5>
            <h6 className=" ml-2">userId: {_id}</h6>
            <h6 className=" ml-2">sellerId: {userRoleId}</h6>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead className="table-primary">
                <tr>
                  <th>Description</th>
                  <th>Endpoint</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Get all listed products</td>
                  <td>/api/product/seller/:sellerId/listed</td>
                </tr>
                <tr>
                  <td>Get all unlisted products</td>
                  <td>/api/product/seller/:sellerId/unlisted</td>
                </tr>
                <tr>
                  <td>Get all listed and unlisted products</td>
                  <td>/api/product/seller/:sellerId/all</td>
                </tr>
                <tr>
                  <td>More coming soon...</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerApi;
