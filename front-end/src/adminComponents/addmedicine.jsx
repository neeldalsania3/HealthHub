import { useState } from "react";
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function ADDMEDICINE() {
  const [medicinename, setMedicinename] = useState()
  const [medicinedesc, setMedicinedesc] = useState()
  const [medicinequantity, setMedicinequantity] = useState()
  const [medicineprice, setMedicineprice] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/addmedicine', {medicinename,medicinedesc,medicinequantity,medicineprice})
    .then(result =>{ 
      console.log(result)
      navigate('/listofmedicine')
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
                <h4 className="card-title">Add Medicine</h4>

                <form onSubmit={Submit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="mname" onChange={(e) => setMedicinename(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" id="mdesc" onChange={(e) => setMedicinedesc(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      id="mquantity"
                      onChange={(e) => setMedicinequantity(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" id="mprice" onChange={(e) => setMedicineprice(e.target.value)}/>
                  </div>
                  <button type="submit" className="btn btn-primary">
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
