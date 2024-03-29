const mongoose = require('mongoose')

const AnnounementSchema = new mongoose.Schema({
    announcement : String,
    announcementfor : String,
    announcementdate : String
})

const AnnouncementModel = mongoose.model("announcements",AnnounementSchema)
module.exports = AnnouncementModel