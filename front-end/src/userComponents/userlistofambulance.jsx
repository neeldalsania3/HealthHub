/* eslint-disable react/jsx-key */
import USERSIDEBAR from './userSidebar';
import NAVBAR from '../adminComponents/Navbar';
import LINKS from '../adminComponents/links';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function USERLISTOFAMBULANCE() {
  const [ambulances, setambulances] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/ambulances')
    .then(result => setambulances(result.data))
    .catch(err => console.log(err))
  })

  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <USERSIDEBAR />
        <div className="page-header">
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <div className="amazingdata">
                <h4 className="card-title">List of Ambulances</h4>
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Ambulance Name</th>
                      <th>Ambulance Description</th>
                      <th>Ambulance Status</th>
                      <th>Ambulance Driver</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ambulances.map((ambulance) => {
                      return <tr>
                        <td>{ambulance._id}</td>
                        <td>{ambulance.ambulancename}</td>
                        <td>{ambulance.ambulanceno}</td>
                        <td>{ambulance.ambulancestatus}</td>
                        <td>{ambulance.ambulancedriver}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LINKS />
    </>
  );
}
