const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    patientname: String,
    doctorname: String,
    date : String,
    appointmentstatus : String, 
    problem: String,
})

const PatientModel = mongoose.model("patients", PatientSchema)
module.exports = PatientModel