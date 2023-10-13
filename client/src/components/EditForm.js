import StudentInfo from "./StudentInfo";
import Navbar from "./Navbar";
import ("./EditForm.css")

function EditForm ( { students , getStudents} ) {
    
    return (
        <div>
            <div className ="logo">logo</div>
               <div className ="mainContainer"> 
            <Navbar/>
            <div className="cards">
                {students.map((student) => (
                    <StudentInfo className ="student" key = {student._id} student ={student} getStudents={getStudents}
                    />
                     ))
                 }
            </div>
        </div> 
        </div>
     
    )
};

export default EditForm;