const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
const app = express()

app.use(express.json())
app.use(express.static("dist"))
app.use(cors({
    origin: true,
    credentials: true
}))

app.use("/api/student", require("./routes/studentRoute"))
app.use("/api/course", require("./routes/coursesRoute"))



app.use("*", async (req, res) => {
    // res.sendFile(path.join(__dirname, "dist", "index.html"))
    res.status(404).json({ message: "Resource Not found" })
})

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message || "somthing went wrong" })
})
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECT")
    app.listen(5000, console.log("SERVER RUNNING"))
})