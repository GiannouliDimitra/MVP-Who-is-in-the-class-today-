import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import EditForm from "./components/EditForm";
import StudentList from "./components/StudentList"
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
    .get("http://localhost:8000/students")
    .then((res) => {
      setStudents(res.data);
      })
    .catch((err) => console.log(err));
  } catch (error) {
    console.log(error)
  }
  console.log(students)
};
//rendering students without refreshing
useEffect(() => {
  getStudents()
}, []);


  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = { <StudentList students = {students} getStudents={getStudents} /> }/>
      <Route path = "/form" element = { <StudentForm getStudents={getStudents} student={student} setStudent={setStudent}/> } />
      <Route path = "/edit" element = { <EditForm students={students} getStudents={getStudents}/> } />
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
