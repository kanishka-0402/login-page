const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginpage")
    .then(() => {
        console.log("connect")
    })
    .catch((error) => {
        console.log(error)
    })

const userSchema = mongoose.Schema({
    email: String,
    password: String
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel