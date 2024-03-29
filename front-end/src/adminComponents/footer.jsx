
export default function FOOTER() {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner-wraper">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright ©{" "}
              <a href="/">
                HealthHub{" "}
              </a>
              2024
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              {" "}
              <a href="/">
                {" "}
                HealthHub
              </a>{" "}
              is a Best Hospital Management Tool.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
