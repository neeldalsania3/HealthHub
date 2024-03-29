/* eslint-disable react/jsx-key */
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import { useEffect, useState } from "react";


export default function LISTOFDEPARTMENT() {

  const [departments, setDepartments] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/departments')
    .then(result => setDepartments(result.data))
    .catch(err => console.log(err))
  })

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deletedepartment/'+id)
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
                <h4 className="card-title">List of Department</h4>
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Department Name</th>
                      <th>Department Description</th>
                      <th>Department Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departments.map((department) => {
                      return <tr>
                        <td>{department._id}</td>
                        <td>{department.departmentname}</td>
                        <td>{department.departmentdesc}</td>
                        <td>{department.departmentstatus}</td>
                        <td>
                          <button
                          onClick={(e) => handleDelete(department._id)} className="btn btn-danger"
                          >Delete</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
                <br />
                <br />
                <a className="btn btn-outline-success btn-fw" href="/adddepartment">Add Department</a>
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
