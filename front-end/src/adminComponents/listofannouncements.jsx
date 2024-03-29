/* eslint-disable react/jsx-key */
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import LINKS from "./links";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function LISTOFANNOUNCEMENTS() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/announcements')
    .then(result => setAnnouncements(result.data))
    .catch(err => console.log(err))
  })

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteannouncement/'+id)
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
                <h4 className="card-title">List of Announcement</h4>
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Announcement</th>
                      <th>Announcement For</th>
                      <th>Announcement Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {announcements.map((announcement) => {
                      return <tr>
                        <td>{announcement._id}</td>
                        <td>{announcement.announcement}</td>
                        <td>{announcement.announcementfor}</td>
                        <td>{announcement.announcementdate}</td>
                        <td>
                          <button
                          onClick={(e) => handleDelete(announcement._id)} className="btn btn-danger"
                          >Delete</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
                <br />
                <br />
                <a className="btn btn-outline-success btn-fw" href="/addannouncement">
                  Add Announcement
                </a>
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
