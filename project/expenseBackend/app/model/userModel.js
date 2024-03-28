const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const Expense = require("./expenseModel")
const uniqueValidator = require("mongoose-unique-validator")

const Schema = mongoose = new Schema({
    email:{
        type:String,
        unique:true,
        require:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "Invalid email format"
            }
        },
        password:{
            type:String,
            required:true,
            unique:true,
        },
        budget:{
            type:String,
            default:0
        },
        imageURL:{
            type:String,    
        }
    }
})


userSchema.plugins(uniqueValidator)

userSchema.statics.checkBudget = async function(obj){
    const user = this
    try{
        const value = await Promise.all([user.findOne({_id:obj.id}),Expense.find({userId:obj.id})])
        const [userObj,expenses] = value
        const remaining = Number(userObj.budget) - expenses.reduce((pre,curr)=>pre+curr.amount,0)-Number(obj.expense)     
        
        if(remaining >= 0){
            return Promise.resolve(
                {message:`Remaining money ${remaining}`}
            )
        }else{
            return Promise.resolve({
                error:"Reached maximum limit"
            })
        }

    }catch(err){
        return Promise.reject({error:err})
    }
}

const User = mongoose.model("User",userSchema)

module.exports = User

