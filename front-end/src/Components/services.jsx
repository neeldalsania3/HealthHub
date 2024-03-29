import React from 'react'

export default function SERVICES() {
  return (
    <>
    <section className="services" id="services">
        <h1 className="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>free checkups</h3>
            <p>You can check Up regularly on our hospital for free.</p>
          </div>

          <div className="box">
            <i className="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>Our Hospital Provides 24 Hours Ambulances For Emergency.</p>
          </div>

          <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>expert doctors</h3>
            <p>
              In Our Hospital Lots of Doctor to Save your Life and Make you
              Healthy.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>
              We will provide good quality medicine in Regionable price Hospital
              It self.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>
              In Hospital you find bed facilites also if you want stay then its
              helpful.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-heartbeat"></i>
            <h3>total care</h3>
            <p>
              We Will totaly care Patient our staff will satisfy your all the
              needs.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}
