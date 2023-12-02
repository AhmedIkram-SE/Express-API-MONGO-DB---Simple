const mongoose=require('mongoose');

const studentsSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    MiddleName:String,
    RegNo: {
        type: String,
        unique: true
    },
    Year: {
        type: String,
        uppercase: true
    }
});
const StudentsModel=mongoose.model("Students_Info",studentsSchema);

module.exports=StudentsModel;