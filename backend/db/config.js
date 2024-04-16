require("dotenv").config()
const mongoose = require("mongoose")

 const db = ()=>{
    mongoose
        .connect(process.env.DB_NAME)
        .then(()=>console.log("DB On!!!"))
        .catch((err)=>{
            console.error(err)
            setInterval(()=>{
                db()
            },3000)
        })
}


module.exports =  db