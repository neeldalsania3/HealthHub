import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HOME from "./Components/homepage.jsx";
import LOGIN from "./pages/login.jsx";
import REGISTER from "./pages/register.jsx";
import AdminDashboard1 from "./adminComponents/AdminDashboard1.jsx";
import USERDASHBOARD from "./userComponents/userdashboard.jsx";
import ADDAMBULANCE from "./adminComponents/addambulance.jsx";
import ADDANNOUNCEMENT from "./adminComponents/addannoucement.jsx";
import ADDAPPOINTMENT from "./adminComponents/addappointment.jsx";
import ADDDEPARTMENT from "./adminComponents/adddepartment.jsx";
import ADDMEDICINE from "./adminComponents/addmedicine.jsx";
import LISTOFACTIVEAPPOINTMENTS from "./adminComponents/listofactiveappointments.jsx";
import LISTOFAMBULANCE from "./adminComponents/listofambulance.jsx";
import LISTOFANNOUNCEMENTS from "./adminComponents/listofannouncements.jsx";
import LISTOFDEPARTMENT from "./adminComponents/listofdepartment.jsx";
import LISTOFMEDICINE from "./adminComponents/listofmedicine.jsx";
import LISTOFPENDINGAPPOINTMENT from "./adminComponents/listofpendingappointment.jsx";
import USERLISTOFAMBULANCE from "./userComponents/userlistofambulance.jsx";
import USERLISTOFANNOUNCEMENTS from "./userComponents/userlistofannouncements.jsx";
import USERLISTOFDEPARTMENT from "./userComponents/userlistofdepartment.jsx";
import USERLISTOFMEDICINE from "./userComponents/userlistofmedicine.jsx";
import USERLISTOFAPPOINTMENT from "./userComponents/userlistofappointment.jsx";
import USERADDAPPOINTMENT from "./userComponents/useraddappointment.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HOME />,
  },
  {
    path: "/Login",
    element: <LOGIN />,
  },
  {
    path: "/Register",
    element: <REGISTER />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard1/>,
  },
  {
    path: "/addambulance",
    element: <ADDAMBULANCE/>,
  },
  {
    path: "/addannouncement",
    element: <ADDANNOUNCEMENT/>,
  },
  {
    path: "/addappointment",
    element: <ADDAPPOINTMENT/>,
  },
  {
    path: "/adddepartment",
    element: <ADDDEPARTMENT/>,
  },
  {
    path: "/addmedicine",
    element: <ADDMEDICINE/>,
  },
  {
    path: "/listofactiveappointments/:id",
    element: <LISTOFACTIVEAPPOINTMENTS/>,
  },
  {
    path: "/listofambulance",
    element: <LISTOFAMBULANCE/>,
  },
  {
    path: "/listofannouncements",
    element: <LISTOFANNOUNCEMENTS/>,
  },
  {
    path: "/listofdepartment",
    element: <LISTOFDEPARTMENT/>,
  },
  {
    path: "/listofmedicine",
    element: <LISTOFMEDICINE/>,
  },
  {
    path: "/listofpendingappointment",
    element: <LISTOFPENDINGAPPOINTMENT/>,
  },
  {
    path: "/userdashboard",
    element: <USERDASHBOARD/>,
  },
  {
    path: "/userlistofambulance",
    element: <USERLISTOFAMBULANCE/>,
  },
  {
    path: "/userlistofannouncements",
    element: <USERLISTOFANNOUNCEMENTS/>,
  },
  {
    path: "/userlistofdepartment",
    element: <USERLISTOFDEPARTMENT/>,
  },
  {
    path: "/userlistofmedicine",
    element: <USERLISTOFMEDICINE/>,
  },
  {
    path: "/userlistofappointment",
    element: <USERLISTOFAPPOINTMENT/>,
  },
  {
    path: "/useraddappointment",
    element: <USERADDAPPOINTMENT/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
