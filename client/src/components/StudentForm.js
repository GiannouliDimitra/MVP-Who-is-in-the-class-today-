import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import Navbar from "./Navbar";
import imageWoman from "../pics/form_woman.jpg";
import imageStars from "../pics/form_woman_stars.jpg";
import ("./StudentForm.css");

function StudentForm ( { student, setStudent, getStudents } ) {
  let navigate = useNavigate();

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
            .post("https://who-is-in-the-class.onrender.com/student/create" , student)
            .then((res) => {
              Swal.fire({text: "The student " + res.data.name + " is added!", confirmButtonColor:"#FDC627"})
              setStudent({ name: "", image: "" })})
            .then(() => getStudents())
            .then(()=> navigate("/students"))
            .catch((error) => console.log(error));
        } catch (error) {
            console.log (error)
        }
    };
return (
  <div>
    <div className ="mainFormContainer"> 
          <Navbar/>
          <div className="imageAndFormContainer">
            <div className="imagesContainer">
            <img className="formImageStars" alt ="stars" src={imageStars}></img>
              <img className="formImage" alt ="woman wondering" src={imageWoman}></img>
            </div>
            <div className="formContainer">
               <form className ="studentForm"onSubmit={(e) => createStudent(e)}>
                <h1 className="formTitle">Student form</h1>
                <input
                  type="text"
                  name ="name"
                  className="addStudentInput"
                  placeholder="Add a student name..."
                  onChange={handleInputChange}
                  value={student.name}
                />
                <input
                  type="text"
                  name ="image"
                  className="addStudentInput"
                  placeholder="Add the image here..."
                  onChange={handleInputChange}
                  value={student.image}
                />
                <button className="formCreateBut">Create</button>   
              </form>
            </div>
          </div>
    </div>
  </div>

)


}

export default StudentForm;