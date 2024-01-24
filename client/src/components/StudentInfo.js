import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import ("./StudentInfo.css");

function StudentInfo ( { student, getStudents , countAbsents } ){

    //states
    const [updatedValue, setUpdatedValue] = useState({
        name: student.name,
        image: student.image,
      });
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState("");

function editStudent (id) {
    console.log(id)
    setId(id);
    setIsEdit(true)
};

const handleInputChange = (e) =>  {
    setUpdatedValue({
      ...updatedValue,
      [e.target.name]: e.target.value,
    });
    console.log(updatedValue);
  };

function changeName(id){
try {
    axios
    .put((`https://who-is-in-the-class.onrender.com/student/${id}`), {
        name:updatedValue.name,
        image:updatedValue.image,
        })
    .then ((res) => console.log(res.data))
    .then(() =>getStudents())
    .then(() =>countAbsents())
    .then(() =>setIsEdit(false))
    .catch((err) => console.log(err))
    
    } catch (error) {
    console.log(error)
    }
    setIsEdit(false);
    Swal.fire({ text:"The student is updated.",
    confirmButtonColor:"#2347F9"});
{
   
        
  };

}

    return (
       <div>
        {
            isEdit? (
                <div className="editItem">
                    <img width="100px" src={student.image}/>
                    <input
                    className='editInput'
                    type="text"
                    name="name"
                    placeholder="Student's name...."
                    onChange={(e) => handleInputChange(e, "name")}
                    value={updatedValue.name}
                    />
                     <input
                    className='editInput'
                    type="text"
                    name="image"
                    placeholder="Student's image...."
                    onChange={(e) => handleInputChange(e, "image")}
                    value={updatedValue.image}
                    />
                    <button className='editStudentBut' onClick={() => changeName(student._id)}>Edit Student's info</button>
                    <button className='editStudentBut' onClick={() => setIsEdit(false)}>Go back</button>
                </div>
            ) : (
         <div className ="studentInfo" key={student._id}>
            <img width="100px" src={student.image}/>
            <h2>{student.name}</h2>
            <button className ="editBut" onClick={() => editStudent(student._id)}><EditIcon></EditIcon></button>
        </div>
            )
}  
</div>
    )

};

export default StudentInfo;