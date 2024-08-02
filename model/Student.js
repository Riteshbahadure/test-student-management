const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    course: { type: mongoose.Types.ObjectId, ref: "courses", required: true },
    institutionsAttended: { type: String, required: true },
    degreesEarned: { type: String, required: true },
    yearsOfAttendance: { type: String, required: true },
})

module.exports = mongoose.model("student", studentSchema)

