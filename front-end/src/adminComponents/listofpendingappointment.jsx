/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function LISTOFPENDINGAPPOINTMENT() {
  const [patients, setPatients] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/patients')
    .then(result => setPatients(result.data))
    .catch(err => console.log(err))
  })

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/delete/'+id)
    .then(res => {console.log(res)
    })
    .catch(errr => console.log(errr))
  }



  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <SIDEBAR />
        <div className="page-header"></div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="amazingdata">
                <h4 className="card-title">Pending Appointments</h4>
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Patient Name</th>
                      <th>Doctor Name</th>
                      <th>Appointment Date</th>
                      <th>Problem</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => {
                      return <tr>
                        <td>{patient._id}</td>
                        <td>{patient.patientname}</td>
                        <td>{patient.doctorname}</td>
                        <td>{patient.date}</td>
                        <td>{patient.problem}</td>
                        <td>{patient.appointmentstatus}</td>
                        <td>

                        <Link  to={`/listofactiveappointments/${patient._id}`} className="btn btn-success">Update</Link>
                        &nbsp;&nbsp;&nbsp;<button
                          // eslint-disable-next-line no-unused-vars
                          onClick={(e) => handleDelete(patient._id)} className="btn btn-danger"
                          >Delete</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
                <br />
                <br />
                <a className="btn btn-outline-success btn-fw" href="/addappointment">
                  Add Appointments
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
      <LINKS />
    </>
  );
}
