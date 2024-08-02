const { getDetails, addDetails, updateDetails, DeleteDetails } = require("../controller/studentController")

const router = require("express").Router()


router
    .get("/get", getDetails)
    .post("/add", addDetails)
    .put("/update/:id", updateDetails)
    .delete("/delete/:id", DeleteDetails)

module.exports = router