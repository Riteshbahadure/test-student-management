const asyncHandler = require("express-async-handler")
const studentCourses = require("../model/studentCourses")


exports.addEnrolledCourses = asyncHandler(async (req, res) => {
    await studentCourses.create(req.body)
    res.json({ Message: "Courses add success" })
})
exports.getEnrolledCourses = asyncHandler(async (req, res) => {
    const result = await studentCourses.find()
    res.json({ message: "Courses Fetch Success", result })
})
exports.updateEnrolledCourses = asyncHandler(async (req, res) => {
    const { id } = req.params
    await studentCourses.findByIdAndUpdate(id, req.body)
    res.json({ message: "Courses update success" })
})
exports.deleteEnrolledCourses = asyncHandler(async (req, res) => {
    const { id } = req.params
    await studentCourses.findByIdAndDelete(id)
    res.json({ message: "Courses delete success" })
})