import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 
import ("./Navbar.css")

function Navbar ( ) {
  const navigate = useNavigate();
  let token;
  let decoded;

  try {
      token = localStorage.getItem("token");
      decoded = jwtDecode(token);
  } catch (error) {
      console.log(error)
  }
 
  function handleLogout () {
      if(token) {
          localStorage.removeItem("token");
          navigate("/login");
      } else {
          return;
      }
  }

return (

<>
{decoded.typeOfUser === "teacher" ? (
  <nav className ="navbar">
      <Link to="/">Home</Link>
      <Link to="/form" >Create a Student</Link> 
      <Link to="/edit">Edit Students</Link>
      <Link to="/students">Dashboard</Link>   
      <div className ="navItem"><Link className ="navText" onClick={handleLogout} to='/'>Logout</Link></div>
    </nav>
) : (
  <nav className ="navbar">
      <Link to="/">Home</Link>
      <Link to="/profil">Student {decoded.name}</Link>
      <Link to="/students">Dashboard</Link>
      <div className ="navItem"><Link className ="navText" onClick={handleLogout} to='/'>Logout</Link></div>
    </nav> 
)
}
</>

)
}

export default Navbar;