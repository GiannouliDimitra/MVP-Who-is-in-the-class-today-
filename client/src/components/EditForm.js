import StudentInfo from "./StudentInfo.js";
import Navbar from "./Navbar.js";
import ("./EditForm.css")

function EditForm ( { students , getStudents, countAbsents} ) {
    
    return (
        <div>
            <div className ="mainContainer"> 
            <Navbar/>
            <div className="containerUnderNavbar">
                 <div>
                <h1 className="editTitle">
                    My students
                </h1>
            </div>
           <div className="studentsEditContainer">
             <div className="cards">
                {students.map((student) => (
                    <StudentInfo className ="student" key = {student._id} student ={student} getStudents={getStudents} countAbsents = {countAbsents}
                    />
                     ))
                 }
            </div>
           </div>
            </div>
           
           
        </div> 
        </div>
     
    )
};

export default EditForm;