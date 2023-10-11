const mongoose = require ("mongoose");

//schema
const studentSchema = new mongoose.Schema ({
    name: String,
    image: String,
    isPresent: { type: Boolean, default: false },
});

//model 
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;