const asyncHandler = require("express-async-handler")
const Student = require("../model/Student")
const studentCourses = require("../model/studentCourses")
// const Order = require("../models/Order")
// const User = require("../models/User")
// const sendEmail = require("../utils/email")

exports.addDetails = asyncHandler(async (req, res) => {
    await Student.create(req.body)
    res.json({ Message: "details add success" })
})
exports.getDetails = asyncHandler(async (req, res) => {
    const result = await Student.find().populate("course")
    // const course = await studentCourses.findOne({ _id: result.course })
    res.json({ message: "Details Fetch Success", result })
})
exports.updateDetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Student.findByIdAndUpdate(id, req.body)
    res.json({ message: "Details update success" })
})
exports.DeleteDetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Student.findByIdAndDelete(id)
    res.json({ message: "Details delete success" })
})

// exports.addEducationDetails = asyncHandler(async (req, res) => {
//     await Student.create(req.body)
//     res.json({ Message: "Education add success" })
// })
// exports.getEducationDetails = asyncHandler(async (req, res) => {
//     const result = await Student.find()
//     res.json({ message: "Education Fetch Success", result })
// })
exports.updateEducationDetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Student.findByIdAndUpdate(id, req.body)
    res.json({ message: "Education update success" })
})
exports.DeleteEducationDetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Student.findByIdAndDelete(id)
    res.json({ message: "Education delete success" })
})