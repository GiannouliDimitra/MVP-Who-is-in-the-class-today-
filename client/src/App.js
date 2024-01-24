import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import EditForm from "./components/EditForm";
import StudentList from "./components/StudentList";
import Home from "./components/Home";
import SignUp from "./auth/SignUp";
import ("./App.css");

function App() {

  //states
  const [student, setStudent] = useState({
    name: "",
    image: "",
    isPresent:"present",
  });
  const [students, setStudents] = useState ([]);

const getStudents = () => {
  try {
    axios
    .get("https://who-is-in-the-class.onrender.com/students")
    .then((res) => {
      setStudents(res.data);
      })
    .catch((err) => console.log(err));
  } catch (error) {
    console.log(error)
  }
};
//rendering students without refreshing
useEffect(() => {
  getStudents();
  
}, []);


function countAbsents() {
  let count=0;
  console.log("inside countfunc",students)
  students.forEach((student) => {
    if (student.isPresent==="absent"){
      count +=1;
    }})
  console.log("absents", count);
  let absentPercentage = Math.round(100*count/students.length)
  return absentPercentage;
};
function countPresents () {
  let count=0;
  console.log("inside countfunc",students)
  students.forEach((student) => {
    if (student.isPresent==="present"){
      count +=1;
    }})
  console.log("presents", count);
  let precentPercentage = Math.round(100*count/students.length)
  return precentPercentage;
};


  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = { <Home /> }/>
      <Route path = "/signUp" element = { <SignUp /> }/>
      <Route path = "/students" element = { <StudentList students = {students} getStudents={getStudents}  countAbsents = {countAbsents} countPresents ={countPresents}  /> }/>
      <Route path = "/form" element = { <StudentForm getStudents={getStudents} student={student} setStudent={setStudent}/> } />
      <Route path = "/edit" element = { <EditForm students={students} getStudents={getStudents} countAbsents ={countAbsents}/> } />
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
