const express = require('express')
const cors = require('cors')
const userModel = require('./userModel')
const app = express()
app.use(cors())
app.use(express.json())
app.post('/register', async(req, res)=>{
    const {email , password} = req.body
    let user = await userModel.create({
        email: email,
        password: password
    })
    res.json(user)
})
app.post("/login", async (req, res)=>{
    const{email, password} = req.body
    let user = await userModel.findOne({
        email: email,
        password: password
    })
    if(user){
        res.json({
            message : "login"
        })
        }
        else{
            res.json({
                message : "login failed"
            })
    }
})
app.listen(5000,()=>{
    console.log("server is running")
})