import { Link } from "react-router-dom";
import ("./Navbar.css")

function Navbar ( { student, setStudent, getStudents } ) {

return (
  
    <nav className ="navbar">
      <Link to="/">Home</Link>
      <Link to="/form" >Create a Student</Link> 
      <Link to="/edit">Edit Students</Link>   
    </nav>
)


}

export default Navbar;