const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const apiRoutes = require("./routes/api-routes")
app.use("/api", apiRoutes)

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})