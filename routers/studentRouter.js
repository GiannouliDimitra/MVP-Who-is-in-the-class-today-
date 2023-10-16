const express = require ("express");
const router = express.Router();
const { 
    findStudents, 
    addStudent, 
    updateStudent, 
    deleteStudent, 
} = require ("../controllers/studentController");

//get
router.get("/students", findStudents);

//post
router.post("/student/create", addStudent);


//put
router.put ("/student/:id", updateStudent);

//delete
router.delete("/student/:id", deleteStudent);

module.exports = router;