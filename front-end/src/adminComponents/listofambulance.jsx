/* eslint-disable react/jsx-key */
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function LISTOFAMBULANCE() {
  const [ambulances, setambulances] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/ambulances')
    .then(result => setambulances(result.data))
    .catch(err => console.log(err))
  })

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteambulance/'+id)
    .then(res => {console.log(res)
    })
    .catch(errr => console.log(errr))
  }


  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <SIDEBAR />
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
                        <td>
                          <button
                          onClick={(e) => handleDelete(ambulance._id)} className="btn btn-danger"
                          >Delete</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
                <br />
                <br />
                <a className="btn btn-outline-success btn-fw" href="/addambulance">Add Ambulance</a>
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
