/* eslint-disable react/jsx-key */
import NAVBAR from '../adminComponents/Navbar'
import USERSIDEBAR from './userSidebar'
import LINKS from '../adminComponents/links'
import axios from 'axios';
import { useEffect, useState } from "react";

export default function USERLISTOFMEDICINE() {
  const [medicines, setMedicines] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/medicines')
    .then(result => setMedicines(result.data))
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
              <h4 className="card-title">List of Medicine</h4>
              <br />
              <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Medicine Name</th>
                      <th>Medicine Description</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicines.map((medicine) => {
                      return <tr>
                        <td>{medicine._id}</td>
                        <td>{medicine.medicinename}</td>
                        <td>{medicine.medicinedesc}</td>
                        <td>{medicine.medicinequantity}</td>
                        <td>{medicine.medicineprice}</td>
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
      <LINKS/>
    </>
  );
}
