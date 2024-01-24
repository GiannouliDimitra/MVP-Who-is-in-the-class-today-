import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import image from "../pics/signUp.jpg"
import "./signUp.css"

function SignUp () {
    //states
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [typeOfUser, setTypeOfUser] = useState("student");
    const [eye,setEye] = useState ("closedEyeSignUp");
    const[passwordType,setPasswordType] = useState ("password");
    const options = [
      'teacher', 'student'
    ];
    const defaultOption = options[0];
    let navigate = useNavigate();

    async function handleSignUp(e) {
     e.preventDefault();
     let res = await axios.post("https://who-is-in-the-class.onrender.com/signUp", {
       name, email, password, typeOfUser
     });
     Swal.fire({text: res.data.msg,
        confirmButtonColor:"#FDC627"
    });
     navigate("/");
    }

    return ( 
        <div>
            <div className='signUpMainContainer'>
              <div className='signUpImage'>
              <img className="homeImage" alt ="woman writing" src={image}></img>
              </div>
             <div className='signUpContainer'>
              <form className='signUpForm' onSubmit={handleSignUp}>
                <h1 className='signUpText'>SignUp Form</h1>
                <label className='signUpLabel' htmlFor='name'> Name:</label>
                <input
                className='signUpInput'
                id='name'
                type='text'
                placeholder='Add your name..'
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />
                 <label className='signUpLabel' htmlFor='email'> Email:</label>
                <input
                className='signUpInput'
                id='email'
                type='text'
                placeholder='Add your email..'
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />
                 <label className="signUpLabel"htmlFor='password'> Password:</label>
                <input
                className='signUpInput'
                id='password'
                type={passwordType}
                placeholder='Add your password..'
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <div className='dropdownSection'>
                  <h3 className='phraseIamA'>I am a: </h3>
                  <Dropdown className="dropDownList" options={options} onChange={(e => setTypeOfUser(e.value))} 
                  value={defaultOption} />
                </div>
              
                <button className='signUpBut' type='submit'>SignUp</button>
            </form>
            <button className={eye} 
              type="text" 
              onClick={()=>{
                if (eye==="closedEyeSignUp"){
                    setEye("openEyeSignUp")
                    setPasswordType("text")
                  return
                 }
                else {
                  setEye("closedEyeSignUp")
                  setPasswordType("password")
                  return
                }
                }}><img className="imgEye" alt ="eye" 
                    src={require(`./authPhotos/${eye}.png`)} />
              </button>
              <button className='goHome' onClick={()=>navigate("/")}>Go Home</button>
        </div> 
        </div>

        </div>
        
        
     );
}

export default SignUp ;