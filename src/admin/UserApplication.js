import React, { useState, useEffect } from 'react';
import { API } from '../config';

const getUnverifiedApplications = () => {
  return fetch(`${API}/application/unverified`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

const UserApplication = () => {
  const [applications, setApplications] = useState([]);
  const [values, setValues] = useState({
    loading: true,
    error: '',
  });

  const getData = () => {
    getUnverifiedApplications().then(data => {
      console.log(data);

      if (data.error) {
        console.log(data.error);
        setValues({
          ...values,
          error: data.error,
          loading: false,
        });
      } else {
        setApplications(data);

        setValues({
          ...values,
          error: '',
          loading: false,
        });
      }

      console.log(applications);
    });
  };

  useEffect(() => {
    console.log('hit');
    getData();
  }, []);

  const { error } = values;

  const showError = () =>
    error?.length !== 0 && (
      <div className="alert alert-danger">
        <h2>{error}</h2>
      </div>
    );

  return (
    <div class="row justify-content-center rowUsers">
      <div class="rowUsersBox shadowRowUsers p-3">
        <div className="row">
          <div className="col-12">
            {showError()}
            <h5 className=" ml-2">Users Applications</h5>
          </div>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead className="table-primary">
                <tr>
                  <th>Requests:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    ksjdgbiug utzudtberhy oasith oyhzsjgbbgsibt xwejtao hs eht
                    wets htheoutS
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserApplication;
