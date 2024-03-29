import { useState } from "react";
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function ADDDEPARTMENT() {
  const [departmentname, setDepartmentname] = useState()
  const [departmentdesc, setDepartmentdesc] = useState()
  const [departmentstatus, setDepartmentstatus] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/adddepartment', {departmentname,departmentdesc,departmentstatus})
    .then(result =>{ 
      console.log(result)
      navigate('/listofdepartment')
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
                <h4 className="card-title">Add Department</h4>

                <form onSubmit={Submit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="Deptname" onChange={(e) => setDepartmentname(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" id="Deptdesc" onChange={(e) => setDepartmentdesc(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      id="Deptstatus"
                      aria-label="Default select example"
                      onChange={(e) => setDepartmentstatus(e.target.value)}>
                      <option selected>Choose</option>
                      <option value="Active">Active</option>
                      <option value="Close">Close</option>
                      <option value="Busy">Busy</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary" >
                    Add
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
