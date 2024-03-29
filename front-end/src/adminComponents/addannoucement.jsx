import { useState } from "react";
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ADDANNOUNCEMENT() {
  const [announcement, setAnnouncement] = useState();
  const [announcementfor, setAnnouncementfor] = useState();
  const [announcementdate, setAnnouncementdate] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/addannouncement", {
        announcement,
        announcementfor,
        announcementdate,
      })
      .then((result) => {
        console.log(result);
        navigate("/listofannouncements");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <SIDEBAR />
        <div className="page-header"></div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Announcement</h4>

                <form onSubmit={Submit}>
                  <div className="mb-3">
                    <label className="form-label">Announcement</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Announcement"
                      onChange={(e) => setAnnouncement(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Announcement For</label>
                    <select
                      className="form-select"
                      id="Announcementfor"
                      aria-label="Default select example"
                      onChange={(e) => setAnnouncementfor(e.target.value)}
                    >
                      <option selected>Choose</option>
                      <option value="Patient">Patient</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Admins">Admins</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="Aenddaate"
                      onChange={(e) => setAnnouncementdate(e.target.value)}/>
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
