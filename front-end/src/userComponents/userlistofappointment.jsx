/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import NAVBAR from "../adminComponents/Navbar";
import USERSIDEBAR from "./userSidebar";
import LINKS from "../adminComponents/links";
import axios from 'axios';

export default function USERLISTOFAPPOINTMENT() {
  const [patients, setPatients] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/patients')
    .then(result => setPatients(result.data))
    .catch(err => console.log(err))
  })



  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <USERSIDEBAR />
        <div className="page-header"></div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <div className="amazingdata">
                <h4 className="card-title">Appointments</h4>
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
                      </tr>
                    })}
                  </tbody>
                </table>
                <br />
                <br />
                <a className="btn btn-outline-success btn-fw" href="/useraddappointment">
                  Take Appointments
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
