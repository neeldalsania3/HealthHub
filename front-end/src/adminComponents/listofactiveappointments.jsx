import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


export default function LISTOFACTIVEAPPOINTMENTS() {
  const {id} = useParams()
  const [patientname, setPatientname] = useState()
  const [doctorname, setDoctorname] = useState()
  const [date, setDate] = useState()
  const [problem, setProblem] = useState()
  const [appointmentstatus, setAppointmentstatus] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3000/getUser/'+id)
    .then(result => {console.log(result)
    setPatientname(result.data.patientname)
    setDoctorname(result.data.doctorname)
    setDate(result.data.date)
    setProblem(result.data.problem)})
    .catch(err => console.log(err))
  })

    const Update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3000/updateUser/'+id, {patientname,doctorname,date,problem,appointmentstatus})
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
                <h4 className="card-title">Approve/Reject Appointment</h4>
                <form onSubmit={Update}>
                <div className="mb-3">
                  <select
                    className="form-select"
                    value={appointmentstatus}
                    onChange={(e) => setAppointmentstatus(e.target.value)}
                  >
                    <option selected>Choose</option>
                    <option value="Approve">Approve</option>
                    <option value="Reject">Reject</option>
                  </select>
                </div>
                <button  type="submit" className="btn btn-primary">
                  Update
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
