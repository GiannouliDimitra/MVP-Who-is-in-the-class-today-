const express = require ("express");
const mongoose = require ("mongoose");
const Student = require ("../models/studentModel");

//get
const findStudents = async (req,res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).send(allStudents);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal server error. We cannot find the students." });
    }
};

//post
const addStudent = async (req,res) => {
    try {
        const clientValue = req.body;
        const newStudent = await Student.create(clientValue);
        res.status(200).send(newStudent);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal server error. We failed to create the new student." });
    }
};

//put
const updateStudent = async (req, res) => {
    try {
        let clientValue = req.body;
        let id = req.params.id;
        await Student.updateOne ({ _id: id }, clientValue);
        res.status(200).send ({msg: "Student is updated successfully!"});
    } catch (error) {
        console.log (error);
        res.status(500).send({ msg: "Sorry, we failed to update the student." });
    }
};

//delete
const deleteStudent = async (req,res) => {
    try {
        await Student.deleteOne({_id: req.params.id });
        res.status(200).send ({msg: "Student is deleted successfully!"});
    } catch (error) {
        console.log (error);
        res.status(500).send({ msg: "Internal error. We cannot delete the student." }); 
    }
};

module.exports = { findStudents, addStudent, updateStudent, deleteStudent }
