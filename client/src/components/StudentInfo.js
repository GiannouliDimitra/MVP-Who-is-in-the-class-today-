import { useState } from "react";
import axios from "axios";
import ("./StudentInfo.css");

function StudentInfo ( { student, getStudents } ){

    //states
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState("");

function editStudent (id) {
    console.log(id)
    setId(id);
    setIsEdit(true)
};

function changeStatus(id){
try {
    axios
    .put((`http://localhost:8000/student/${id}`), {
        isPresent: student.isPresent==="present" ? "absent" : "present",
    })
    .then ((res) => alert(res.data.msg))
    .then(() =>getStudents())
    .then(() =>setIsEdit(false))
    .catch((err) => console.log(err))
    
} catch (error) {
    console.log(error)
}
}

    return (
       <div>
        {
            isEdit? (
                <div className="editItem">
                    <img width="100px" src={student.image}/>
                    <h2>{student.name}</h2>
                    <p>{student.isPresent}</p>
                    <button>Edit student</button>
                    <button onClick={() => changeStatus(student._id)}>Change the status</button>
                    <button onClick={() => setIsEdit(false)}>Go back</button>
                </div>
            ) : (
         <div className ="studentInfo" key={student._id}>
            <h2>{student.name}</h2>
            <h6>{student.isPresent}</h6>
            <button className ="editBut" onClick={() => editStudent(student._id)}>Edit</button>
        </div>
            )
}  
</div>
    )

};

export default StudentInfo;