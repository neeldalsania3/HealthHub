import React from 'react'

export default function REVIEW() {
  return (
    <>
    <section className="review" id="review">
        <h1 className="heading">
          {" "}
          client <span>review</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="/image/pic-1.jpg" alt="" />
            <h3>Nakul Sridevan</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
            Everyone From The Nurses To The Doctors To The Respiratory Therapists Everyone Was Absolutely Fantastic, Professional, Caring And Outstanding
            </p>
          </div>

          <div className="box">
            <img src="/image/pic-2.webp" alt="" />
            <h3>Sukriti Ranjan</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
            Kind, Friendly Staff From The Minute We Walked In, Felt Very Safe In Their Hands As Nurses Were Always On Hand And Checking On Me
            </p>
          </div>

          <div className="box">
            <img src="/image/pic-3.jpg" alt="" />
            <h3>Amar Sahgal</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
            I Wish To Express My Deep Appreciation For The Wonderful Care I Received At The Hospital Of The University Of Pennsylvania.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
