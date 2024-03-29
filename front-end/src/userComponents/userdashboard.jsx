import FOOTER from "../adminComponents/footer";
import DASHBOARD from "../adminComponents/Dashboard";
import NAVBAR from "../adminComponents/Navbar";
import LINKS from "../adminComponents/links";
import USERSIDEBAR from "./userSidebar";

export default function USERDASHBOARD() {
  return (
    <>
    <NAVBAR />
      <div className="container-fluid page-body-wrapper">
        <USERSIDEBAR />
        <div className="main-panel">
        <DASHBOARD/>
          <FOOTER />
        </div>
      </div>
      <LINKS/>
    </>
  )
}
