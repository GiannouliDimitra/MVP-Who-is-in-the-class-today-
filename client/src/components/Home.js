import Login from "../auth/Login";
import image from "../pics/teacher_img.jpg"
import "./home.css";

function Home () {
    return ( 
        <div className="homeMainContainer">
            <div className="loginContainer">
                <Login />
            </div>
            <div>
               <div>
                <h3 className="title">Who is in the class?</h3>
            </div>
            <div>
            <img className="homeImage" src={image}></img></div>
        </div>   
            </div>
          
     );
}

export default Home ;