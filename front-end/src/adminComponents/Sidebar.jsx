export default function SIDEBAR() {

  return (
    <>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-category"></li>
            <li className="nav-item">
              <a className="nav-link"  style={{'font-size':'1.1rem'}}>
                <span className="icon-bg">
                  <i className="mdi mdi-cube menu-icon"></i>
                </span>
                <a href="/admindashboard" style={{'text-decoration':'none'}} className="menu-title" >Admin Dashboard </a>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ui-basic1"
                 aria-expanded="true"
                aria-controls="ui-basic"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-webhook menu-icon"></i>
                </span>
                <span className="menu-title">Departments</span>
                <i className="menu-arrow"></i>
              </a>
              <div   id="ui-basic1">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a href="/adddepartment" className="nav-link" style={{'font-size':'1.1rem'}}>Add Department</a>
                  </li>
                  <li className="nav-item">
                    <a href="/listofdepartment" className="nav-link" style={{'font-size':'1.1rem'}}>List Of Departments</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ui-basic2"
                 aria-expanded="true"
                aria-controls="ui-basic"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-tooltip-edit menu-icon"></i>
                </span>
                <span className="menu-title" >Appointments</span>
                <i className="menu-arrow"></i>
              </a>
              <div   id="ui-basic2">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a href="/addappointment" className="nav-link"  style={{'font-size':'1.1rem'}}>Add Appointment</a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a href="/listofpendingappointment" className="nav-link"  style={{'font-size':'1.1rem'}}>List Of Pending Appointment</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ui-basic3"
                 aria-expanded="true"
                aria-controls="ui-basic"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-bookmark-check menu-icon"></i>
                </span>
                <span className="menu-title">Announcement</span>
                <i className="menu-arrow"></i>
              </a>
              <div   id="ui-basic3">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a href="/addannouncement" className="nav-link"  style={{'font-size':'1.1rem'}}>Add Announcement</a>
                  </li>
                  <li className="nav-item">
                    <a href="/listofannouncements" className="nav-link"  style={{'font-size':'1.1rem'}}>List Of Announcement</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ui-basic4"
                 aria-expanded="true"
                aria-controls="ui-basic"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-needle menu-icon"></i>
                </span>
                <span className="menu-title">Medicine</span>
                <i className="menu-arrow"></i>
              </a>
              <div   id="ui-basic4">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a href="/addmedicine" className="nav-link"  style={{'font-size':'1.1rem'}}>Add Medicine</a>
                  </li>
                  <li className="nav-item">
                    <a href="/listofmedicine" className="nav-link"  style={{'font-size':'1.1rem'}}>List Of Medicine</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ui-basic5"
                 aria-expanded="true"
                aria-controls="ui-basic"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-ambulance menu-icon"></i>
                </span>
                <span className="menu-title">Ambulance</span>
                <i className="menu-arrow"></i>
              </a>
              <div   id="ui-basic5">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a href="/addambulance" className="nav-link"  style={{'font-size':'1.1rem'}}>Add Ambulance</a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a href="/listofambulance" className="nav-link"  style={{'font-size':'1.1rem'}}>List Of Ambulance</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item sidebar-user-actions">
              <div className="user-details">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center">
                      <div className="sidebar-profile-text">
                        <label id="Label1" className="mb-1">
                          Admin
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item sidebar-user-actions">
              <div className="sidebar-user-menu">
                <a href="/" className="nav-link"  style={{'font-size':'1.1rem'}}>Logout</a>
              </div>
            </li>
          </ul>
        </nav>
    </>
  )
}
