import { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentItem from "./components/StudentItem";

function App() {
  const [student, setStudent] = useState({
    name: "",
    image: "",
    isPresent:false,
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
};
//rendering students without refreshing
useEffect(() => {
  getStudents()
}, []);


  return (
    <div className="App">
     <StudentForm></StudentForm>
     <StudentItem></StudentItem>
        <p>
          test
        </p>
      
    </div>
  );
}

export default App;
