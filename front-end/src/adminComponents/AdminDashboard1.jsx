import DASHBOARD from "./Dashboard";
import NAVBAR from "./Navbar";
import SIDEBAR from "./Sidebar";
import FOOTER from "./footer";
import LINKS from "./links";
// import ADDAMBULANCE from "./addambulance";

export default function AdminDashboard1() {
  return (
    <>
      <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <SIDEBAR />
        <div className="main-panel">
        <DASHBOARD/>
          <FOOTER />
        </div>
      </div>
      <LINKS/>
    </>
  );
}
