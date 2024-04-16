const { validationResult } = require("express-validator")
const IncomeSchema = require("../models/incomeModel")
const income = require("../../validation/income.")
exports.addIncome = async(req,res)=>{
try{
    const errors = validationResult(req.body)
    if(!errors.isEmpty()){
        res.status(500).json({errors:errors.array()})
    }else{
        const {title,amount,category,description,date} = req.body 
    const income =await IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    }).save()
    res.status(201).json({msg:"Income Added",data:income})
    }
    
}catch(error){
    console.log(error)
    res.status(500).json({msg:"Server error",error})
}
}


exports.getIncomes = async(req,res)=>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Server error",error})
    }
}

exports.deleteIncome = async(req,res)=>{
    const {incomeId} = req.params
    try {
        const deleteIncome = await IncomeSchema.findByIdAndDelete({_id:incomeId}) 
        res.status(200).json({msg:"SuccessFully deleted",data:deleteIncome})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Server error",error})
    }
}

exports.updateIncome = async(req,res)=>{
    // if(!errors.isEmpty()){
    //     res.status(500).json({errors:errors.array()})
    // }else{
        const {incomeId} = req.params
        try {
            const updateIncome = await IncomeSchema.findByIdAndUpdate({_id:incomeId},req.body,{new:true}) 
            res.status(201).json({msg:"SuccessFully Updated",data:updateIncome})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"Server error",error})
        }

    
}

