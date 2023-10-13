import axios from "axios";
import Navbar from "./Navbar";
import ("./StudentForm.css");

function StudentForm ( { student, setStudent, getStudents } ) {


    const handleInputChange = (e)  => {
        const value = e.target.value;
        setStudent({
            ...student,
            [e.target.name]:value
        })
        console.log(student)  
    }

    const createStudent =  (e) =>{
        e.preventDefault();
        try {
            axios
            .post("http://localhost:8000/student/create" , student)
            .then((res) => alert ("The student " + res.data.name + " is added"))
            .then(() => getStudents())
            .catch((error) => console.log(error));
        } catch (error) {
            console.log (error)
        }
        
    };
return (
  <div>
    <div className ="logo">logo</div>
    <div className ="mainContainer"> 
          <Navbar/>
        <form className ="studentForm"onSubmit={(e) => createStudent(e)}>
             <h2>Student form</h2>
      <input
        type="text"
        name ="name"
        placeholder="Add a student name..."
        onChange={handleInputChange}
        value={student.name}
      />
        <input
        type="text"
        name ="image"
        placeholder="Add the image here..."
        onChange={handleInputChange}
        value={student.image}
      />
      <button className="createBut">Create</button>   
        </form>
    </div>
  </div>

)


}

export default StudentForm;