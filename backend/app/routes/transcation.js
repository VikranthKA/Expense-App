const { incomeValidation } = require("../../validation/income.")
const { addExpense, getExpenses, deleteExpense, updateExpense } = require("../controllers/expenseCltr")
const { addIncome, getIncomes, deleteIncome, updateIncome } = require("../controllers/incomeCltr")

const router = require("express").Router()
const {checkSchema} = require("express-validator")




router.post("/add-income",checkSchema(incomeValidation),addIncome)
router.get("/get-incomes",getIncomes)
router.delete("/delete-income/:incomeId",deleteIncome)
router.put("/update-income/:incomeId",updateIncome)
router.post("/add-expense",checkSchema(incomeValidation),addExpense)
router.get("/get-expenses",getExpenses)
router.delete("/delete-expense/:expenseId",deleteExpense)
router.put("/update-expense/:expenseId",updateExpense)
module.exports = router