import axios from "axios";
import { useState } from "react";

import ("./StudentItem.css");

function StudentItem (){
    return (
<div className ="studentCard">
    <img width="150px" src={require ("../pics/frog.jpg")}/>
    <h2>student name</h2>
    <p>Is here!</p>
</div>
    )
};

export default StudentItem;