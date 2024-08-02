const {  updateEnrolledCourses, deleteEnrolledCourses, addEnrolledCourses, getEnrolledCourses } = require("../controller/studentCourses")

const router = require("express").Router()


router
    .get("/get", getEnrolledCourses)
    .post("/add", addEnrolledCourses)
    .put("/update/:id", updateEnrolledCourses)
    .delete("/delete/:id", deleteEnrolledCourses)
module.exports = router