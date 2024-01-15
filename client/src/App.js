import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import EditForm from "./components/EditForm";
import StudentList from "./components/StudentList";
import Home from "./components/Home";
import SignUp from "./auth/SignUp.js";
import ("./App.css");

function App() {

  //states
  const [absents, setAbsents] = useState(0);
  const [student, setStudent] = useState({
    name: "",
    image: "",
    isPresent:"present",
  });
  const [students, setStudents] = useState ([]);

const getStudents = () => {
  try {
    axios
    .get("http://localhost:8000/students")
    .then((res) => {
      setStudents(res.data);
      })
    .catch((err) => console.log(err));
  } catch (error) {
    console.log(error)
  }
  console.log("the students" , students)
};
//rendering students without refreshing
useEffect(() => {
  getStudents();
  countAbsents();
}, []);



async function countAbsents () {
  await getStudents();
  let count=0;
  students.forEach((student) => {
    if (student.isPresent==="absent"){
      count +=1;
    }})
  setAbsents(count)
  console.log(absents);
};


  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = { <Home /> }/>
      <Route path = "/signUp" element = { <SignUp /> }/>
      <Route path = "/students" element = { <StudentList students = {students} getStudents={getStudents}  countAbsents = {countAbsents} absents ={absents} /> }/>
      <Route path = "/form" element = { <StudentForm getStudents={getStudents} student={student} setStudent={setStudent}/> } />
      <Route path = "/edit" element = { <EditForm students={students} getStudents={getStudents} countAbsents ={countAbsents}/> } />
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
