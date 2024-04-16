const { validationResult } = require("express-validator")
const ExpenseSchema = require("../models/expense")
const income = require("../../validation/income.")


exports.addExpense = async(req,res)=>{
try{
    const errors = validationResult(req.body)
    if(!errors.isEmpty()){
        res.status(500).json({errors:errors.array()})
    }else{
        const {title,amount,category,description,date} = req.body
    const expense =await ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    }).save()
    res.status(201).json({msg:"Expense Added",data:expense})
    }
    
}catch(error){
    console.log(error)
    res.status(500).json({msg:"Server error",error})
}
}


exports.getExpenses = async(req,res)=>{
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Server error",error})
    }
}

exports.deleteExpense = async(req,res)=>{
    const {expenseId} = req.params
    try {
        const deleteExpense  = await ExpenseSchema.findByIdAndDelete({_id:expenseId}) 
        res.status(200).json({msg:"SuccessFully deleted",data:deleteExpense})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Server error",error})
    }
}

exports.updateExpense = async(req,res)=>{
    // if(!errors.isEmpty()){
    //     res.status(500).json({errors:errors.array()})
    // }else{
        const {expenseId} = req.params
        try {
            const updateExpense = await ExpenseSchema.findByIdAndUpdate({_id:expenseId},req.body,{new:true}) 
            res.status(201).json({msg:"SuccessFully Updated",data:updateExpense})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"Server error",error})
        }

    
}

