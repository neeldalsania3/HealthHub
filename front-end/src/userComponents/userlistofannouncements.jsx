/* eslint-disable react/jsx-key */
import USERSIDEBAR from "./userSidebar";
import NAVBAR from "../adminComponents/Navbar";
import LINKS from "../adminComponents/links";
import axios from "axios";
import { useEffect, useState } from "react";

export default function USERLISTOFANNOUNCEMENTS() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/announcements")
      .then((result) => setAnnouncements(result.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <USERSIDEBAR />
        <div className="page-header"></div>
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
                      return (
                        <tr>
                          <td>{announcement._id}</td>
                          <td>{announcement.announcement}</td>
                          <td>{announcement.announcementfor}</td>
                          <td>{announcement.announcementdate}</td>
                        </tr>
                      );
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
