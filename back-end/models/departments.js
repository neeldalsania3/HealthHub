const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
    departmentname : String,
    departmentdesc : String,
    departmentstatus : String
})

const DepartmentModel = mongoose.model("departments",DepartmentSchema)
module.exports = DepartmentModel