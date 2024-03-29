import { useState } from "react";
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function ADDAPPOINTMENT() {
  const [patientname, setPatientname] = useState()
  const [doctorname, setDoctorname] = useState()
  const [date, setDate] = useState()
  const [problem, setProblem] = useState()
  const [appointmentstatus, setappointmentstatus] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/addappointment', {patientname,doctorname,date,problem,appointmentstatus})
    .then(result =>{ 
      console.log(result)
      navigate('/listofpendingappointment')
    })
    .catch(err => console.log(err))
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
                <h4 className="card-title">Take Appointment</h4>

                <form  onSubmit={Submit}>
                  <div className="mb-3">
                    <label className="form-label">Patient Name</label>
                    <input type="text" className="form-control" id="pname" 
                    onChange={(e) => setPatientname(e.target.value)}/>

                  </div>
                  <div className="mb-3">
                    <label className="form-label">Doctor Name</label>
                    <select
                      className="form-select"
                      id="dname"
                      aria-label="Default select example"
                      onChange={(e) => setDoctorname(e.target.value)}>
                      <option selected>Choose</option>
                      <option value="Shrukant Sharma">Shrukant Sharma</option>
                      <option value="Nishani kansu">Nishani kansu</option>
                      <option value="murli parmar">murli parmar</option>
                      
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Appointment Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="Appointmentdate"
                      onChange={(e) => setDate(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Problem</label>
                    <input type="text" className="form-control" id="problem" 
                    onChange={(e) => setProblem(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      id="status"
                      aria-label="Default select example"
                      onChange={(e) => setappointmentstatus(e.target.value)}>
                      <option selected>Choose</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                  <button href="/listofpendingappointment" type="submit" className="btn btn-primary">
                    Take
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LINKS />
    </>
  );
}
