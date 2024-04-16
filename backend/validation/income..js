const incomeValidationSchema = {
    title:{
        notEmpty:{
            errorMessage:"Title cannot be empty"
        }
    },
    amount:{
        notEmpty:{
            errorMessage:"Amount cannot be empty"
        }
    },
    category:{
        notEmpty:{
            errorMessage:"Category cannot be empty"
        }
    },
    description:{
        notEmpty:{
            errorMessage:"Description cannot be empty"
        }
    },
    date:{
        notEmpty:{
            errorMessage:"Date cannot be empty"
        }
    }
}

module.exports = {incomeValidation : incomeValidationSchema}