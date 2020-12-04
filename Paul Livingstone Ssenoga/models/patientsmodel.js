const mongoose = require('mongoose')

const PatientSchema = mongoose.Schema({
    surname: String,
    given: String,  
    dob: String,
    doj: String,
    residence: String,
    occupation:String,
    nationality:String,   
    gender: [{ type: String }],
    category: [{ type: String }],  
  });   


module.exports=mongoose.model('Patients', PatientSchema);