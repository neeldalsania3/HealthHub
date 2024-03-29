/* eslint-disable react/jsx-key */
import NAVBAR from '../adminComponents/Navbar'
import LINKS from '../adminComponents/links'
import USERSIDEBAR from './userSidebar'
import axios from 'axios';
import { useEffect, useState } from "react";

export default function USERLISTOFDEPARTMENT() {
  
  const [departments, setDepartments] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/departments')
    .then(result => setDepartments(result.data))
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
