require("dotenv").config()

const express = require("express")
const cors = require("cors")
const {readdirSync} = require("fs")
const db = require("./db/config")

const app = express()

db()

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello World")
})


//routes
//routes
readdirSync("./app/routes").map((route) => app.use('/api/v1', require("./app/routes/" + route)));
app.listen(process.env.PORT,()=>{
    console.log("Server On!!!",process.env.PORT)
})


