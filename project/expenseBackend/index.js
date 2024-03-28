const express = require("express")


const app = express()
const PORT = 3333

app.listen(()=>{
    console.log("App running on the ",PORT)
})