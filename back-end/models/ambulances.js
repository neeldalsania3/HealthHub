const mongoose = require('mongoose')

const AmbulanceSchema = new mongoose.Schema({
    ambulancename : String,
    ambulanceno : String,
    ambulancestatus : String,
    ambulancedriver : String,
})

const AmbulanceModel = mongoose.model("ambulances",AmbulanceSchema)
module.exports = AmbulanceModel