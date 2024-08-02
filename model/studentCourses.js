const mongoose = require("mongoose")

const CoursesSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: String, required: true },
})

module.exports = mongoose.model("courses", CoursesSchema)

