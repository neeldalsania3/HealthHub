/* eslint-disable react/jsx-key */
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function LISTOFMEDICINE() {
  const [medicines, setMedicines] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/medicines')
    .then(result => setMedicines(result.data))
    .catch(err => console.log(err))
  })

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deletemedicine/'+id)
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
                        <td>
                          <button
                          onClick={(e) => handleDelete(medicine._id)} className="btn btn-danger"
                          >Delete</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
                <br />
                <br />
              <a className="btn btn-outline-success btn-fw" href="/addmedicine">Add Medicine</a>
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
