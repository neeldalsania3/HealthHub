
export default function DASHBOARD() {
  return (
    <>
    <div className="content-wrapper">
             <h2
              className="text-dark font-weight-bold mb-2"
              style={{ "font-size": "2.25rem" }}
             >
              {" "}
              Overview dashboard{" "}
             </h2>
             <div className="tab-content tab-transparent-content">
              <div
                className="tab-pane fade active show"
                id="business-1"
                role="tabpanel"
                aria-labelledby="business-tab"
              >
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body text-center" style={{'background-color':'white'}}>
                        <h5 className="mb-2 text-dark font-weight-normal">
                          Departments
                        </h5>
                        <h2 className="mb-4 text-dark font-weight-bold"></h2>
                        <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-webhook icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0"></p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark"></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body text-center"style={{'background-color':'white'}}>
                        <h5 className="mb-2 text-dark font-weight-normal">
                          Appointments
                        </h5>
                        <h2 className="mb-4 text-dark font-weight-bold"></h2>
                        <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-tooltip-edit icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0"></p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark"></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body text-center" style={{'background-color':'white'}}>
                        <h5 className="mb-2 text-dark font-weight-normal">
                          Ambulances
                        </h5>
                        <h2 className="mb-4 text-dark font-weight-bold"></h2>
                        <div className="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-ambulance icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0"></p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark"></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body text-center" style={{'background-color':'white'}}>
                        <h5 className="mb-2 text-dark font-weight-normal">
                          Announcements
                        </h5>
                        <h2 className="mb-4 text-dark font-weight-bold"></h2>
                        <div className="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-bookmark-check icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0"></p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark"></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
