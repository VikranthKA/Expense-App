const mongoose = require("mongoose")

const {Schema,model} = mongoose

const expenseSchema = new Schema({
    amount:{
        notEmpty:{
            errorMessage:"Cannot be empty"
        }
    },   
  


 
    categoryId:{ 
        type:Schema.Types.OBjectId,
        ref:"Category",
        required:true
    },
    userId:{
        type:Schema.Types.OBjectId,
        ref:"User",
        required:true
    },
    expenseDate:{
        type:Date,
        default:Date.now,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
    },
    note:{
        type:String
    },

})

const Expense = model("Expense",expenseSchema)

module.exports = Expense
