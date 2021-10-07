const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:String,required:true},
    gender:{type:String,required:true},
    city:{type:String,required:true},
},
    {
        versionKey: false,
        timestamps:true,
}

)

const Student = mongoose.model("Student", studentSchema)

module.exports = Student;