import StudentItem from "./StudentItem";
import Navbar from "./Navbar";
import { useEffect } from "react";
import ("./StudentList.css");

function StudentList ( { students,getStudents } ) {
    useEffect(() => {
        getStudents();
      }, []);
    return (
        <div>
              <h2>Who is in the class?</h2>
              <div className ="logo">logo</div>
              <div className ="Container"> 
                <Navbar/>
                <div className="listCards">
                     {students.map((student) => (
                <StudentItem key = {student._id} student ={student}
                />
                ))
                }
                </div>
                </div>
        </div>  
    )
};

export default StudentList;