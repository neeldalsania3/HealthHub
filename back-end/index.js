const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PatientModel = require("./models/patients");
const UserModel = require("./models/users");
const DepartmentModel = require("./models/departments");
const AnnouncementModel = require("./models/announcements");
const MedicineModel = require("./models/medicines");
const AmbulanceModel = require("./models/ambulances");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/healthhub");

//Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((users) => {
      if (users) {
        if (users.password === "admin" && users.email === "admin@gmail.com") {
          res.json("admin");
        } else if (users.password === password) {
          res.json("success");
        } else {
          res.json("the password is incorrect");
        }
      } else{
        res.json("No record existed")
      }
    })
    .catch((err) => res.json(err));
});

//Register
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//Appointments
app.get("/patients", (req, res) => {
  PatientModel.find({})
    .then((patients) => res.json(patients))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  PatientModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  PatientModel.findById({ _id: id })
    .then((patients) => res.json(patients))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  PatientModel.findByIdAndUpdate(
    { _id: id },
    {
      patientname: req.body.patientname,
      doctorname: req.body.doctorname,
      date: req.body.date,
      problem: req.body.problem,
      appointmentstatus: req.body.appointmentstatus,
    }
  )
    .then((patients) => res.json(patients))
    .catch((err) => res.json(err));
});

app.post("/addappointment", (req, res) => {
  PatientModel.create(req.body)
    .then((patients) => res.json(patients))
    .catch((err) => res.json(err));
});

//Department
app.post("/adddepartment", (req, res) => {
  DepartmentModel.create(req.body)
    .then((departments) => res.json(departments))
    .catch((err) => res.json(err));
});
app.get("/departments", (req, res) => {
  DepartmentModel.find({})
    .then((departments) => res.json(departments))
    .catch((err) => res.json(err));
});

app.delete("/deletedepartment/:id", (req, res) => {
  const id = req.params.id;
  DepartmentModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//Announcement
app.post("/addannouncement", (req, res) => {
  AnnouncementModel.create(req.body)
    .then((announcements) => res.json(announcements))
    .catch((err) => res.json(err));
});
app.get("/announcements", (req, res) => {
  AnnouncementModel.find({})
    .then((announcements) => res.json(announcements))
    .catch((err) => res.json(err));
});

app.delete("/deleteannouncement/:id", (req, res) => {
  const id = req.params.id;
  AnnouncementModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//Medicine
app.post("/addmedicine", (req, res) => {
  MedicineModel.create(req.body)
    .then((medicines) => res.json(medicines))
    .catch((err) => res.json(err));
});
app.get("/medicines", (req, res) => {
  MedicineModel.find({})
    .then((medicines) => res.json(medicines))
    .catch((err) => res.json(err));
});

app.delete("/deletemedicine/:id", (req, res) => {
  const id = req.params.id;
  MedicineModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//Ambulance
app.post("/addambulance", (req, res) => {
  AmbulanceModel.create(req.body)
    .then((ambulances) => res.json(ambulances))
    .catch((err) => res.json(err));
});
app.get("/ambulances", (req, res) => {
  AmbulanceModel.find({})
    .then((ambulances) => res.json(ambulances))
    .catch((err) => res.json(err));
});

app.delete("/deleteambulance/:id", (req, res) => {
  const id = req.params.id;
  AmbulanceModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("Server is running");
});
