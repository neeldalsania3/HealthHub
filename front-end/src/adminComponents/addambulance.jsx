import { useState } from "react";
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ADDAMBULANCE() {
  const [ambulancename, setAmbulancename] = useState();
  const [ambulanceno, setAmbulanceno] = useState();
  const [ambulancestatus, setAmbulancestatus] = useState();
  const [ambulancedriver, setAmbulancedriver] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/addambulance", {
        ambulancename,
        ambulanceno,
        ambulancestatus,
        ambulancedriver,
      })
      .then((result) => {
        console.log(result);
        navigate("/listofambulance");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <SIDEBAR />
        <div className="main-panel">
          <div className="page-header"></div>
          <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Add Ambulance</h4>

                  <form onSubmit={Submit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" id="aname"  onChange={(e) => setAmbulancename(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ambulance No</label>
                      <input type="text" className="form-control" id="ano" onChange={(e) => setAmbulanceno(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ambulance Status</label>
                      <select
                        className="form-select"
                        id="astatus"
                        aria-label="Default select example"
                        onChange={(e) => setAmbulancestatus(e.target.value)}>
                        <option selected>Select Status</option>
                        <option value="Avaiable">Available</option>
                        <option value="Busy">busy</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Ambulance Driver Name
                      </label>
                      <input type="text" className="form-control" id="adname" onChange={(e) => setAmbulancedriver(e.target.value)}/>
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
      </div>
      <LINKS />
    </>
  );
}
