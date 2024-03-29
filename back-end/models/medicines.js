const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
    medicinename : String,
    medicinedesc : String,
    medicinequantity : String,
    medicineprice : String
})

const MedicineModel = mongoose.model("medicines",MedicineSchema)
module.exports = MedicineModel