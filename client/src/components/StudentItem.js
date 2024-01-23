import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Swal from 'sweetalert2';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import ("./StudentItem.css");

function StudentItem ( {student, getStudents, countAbsents} ){
    let token;
    let decoded;
  try {
      token = localStorage.getItem("token");
      decoded = jwtDecode(token);
  } catch (error) {
      console.log(error)
  }

  
  async function deleteStudent(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#2347F9",
      cancelButtonColor: "#FDC627",
      confirmButtonText: "Yes!",
      cancelButtonText:"No",
    }).then((result) => {
      if (result.isConfirmed) { 
        try {
          axios.delete(`http://localhost:8000/student/${id}`)
          .then(() =>getStudents())
        } catch (error) {
          console.log("delete student", error);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonColor:"#2347F9",
        });
      }
    });
  };
// change the status of the student
function changeStatus(id){
    try {
        axios
        .put((`http://localhost:8000/student/${id}`), {
            isPresent: student.isPresent==="present" ? "absent" : "present",
        })
        .then ((res) =>  Swal.fire({text: res.data.msg ,
            confirmButtonColor:"#FDC627"}))
        .then(() =>getStudents())
        .then(() =>countAbsents())
        .catch((err) => console.log(err))
        
    } catch (error) {
        console.log(error)
    }
    }

    return (
        <>
{decoded.typeOfUser === "teacher" ? (
    <div className ="studentCard">
            <img  className={student.isPresent} width="100px" src={student.image}/>
            <h2 className={student.isPresent}>{student.name}</h2>
            <p className={student.isPresent}>{student.isPresent}</p>
          <div>
            <button className="deleteBut" onClick={() =>deleteStudent(student._id)} title ="delete a student"><PersonRemoveIcon></PersonRemoveIcon></button>
            <button className="editBut" onClick={() =>changeStatus(student._id)} title = "change the status of a student"><ModeStandbyIcon></ModeStandbyIcon></button>
          </div>
        </div>
  ) : (
    <div className ="studentCard">
    <img  className={student.isPresent} width="100px" src={student.image}/>
    <h2 className={student.isPresent}>{student.name}</h2>
    <p className={student.isPresent}>{student.isPresent}</p>
</div>
  )
  }
  </>
    )
};

export default StudentItem;