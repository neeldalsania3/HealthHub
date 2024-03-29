export default function ABOUT() {
  return (
    <>
    <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>

        <div className="row">
          <div className="image">
            <img src="/HomeAssets/image/about-img.svg" alt="" />
          </div>

          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>
            At HealthHub, We Understand That Each Individual Is Unique, And So Are Their Healthcare Needs. Our Team Of Highly Skilled And Compassionate Healthcare Professionals Is Committed To Delivering Comprehensive And Patient-Centered Care.
            </p>
            <p>
            From Routine Check-Ups To Specialized Treatments, We Offer A Wide Range Of Services To Cater To The Diverse Health Requirements Of Our Community.
            </p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"></span>{" "}
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
