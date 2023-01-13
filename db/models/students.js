const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 3,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid EmailId!!!")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
    },
    address:{
        type:String,
        required:true,
        minlength:10
    }
})

const Student = new mongoose.model('Students',studentSchema)

module.exports = Student

