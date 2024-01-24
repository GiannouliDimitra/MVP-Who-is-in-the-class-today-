import { useState, useEffect } from "react";
import StudentItem from "./StudentItem";
import AnalogClock from 'analog-clock-react';
import Navbar from "./Navbar.js";
import DateDisplay from "./DateDisplay";
import { PieChart } from 'react-minimal-pie-chart';
import ("./StudentList.css");

function StudentList ( { students,getStudents, countAbsents, countPresents } ) {
    let options = {
        width: "100px",
        border: true,
        borderWidth: "2",
        borderColor: "#2e2e2e",
        baseColor: "white",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#FDC627",
          minute: "#2e2e2e",
          hour: "#2e2e2e"
        }
    };
    let presents = countPresents();
    let absents = countAbsents();

    useEffect(() => {
        getStudents();
        
      }, []);

    return (
        <div className="studentListContainer">
            <Navbar/>
            <h1>Who is in the class?</h1>
            <div className="mainInfoContainer">
                <div className="dateAndTime">
                    <DateDisplay />
                    <AnalogClock  {...options}/>
                </div>
                <div className="studentsContainer">
                    <div className="listCards">
                     {students.map((student) => (
                        <StudentItem key = {student._id} student ={student} getStudents = {getStudents} countAbsents ={countAbsents}
                        />
                    ))}
                </div>
                </div>
                <div className="pieChart">
                <PieChart
                    label={(props) => { return props.dataEntry.title;}}
                    data={[
                        { title: `${absents}%`, value: absents, color: '#2347F9' },
                        { title: `${presents}%`, value: presents, color: '#FDC627' },
                        ]}
                />
               
                <div className="PiechartLegent">
                    <div className="absentsContainer">
                       <div className="absentsLegent">
                    </div>
                    <div>
                        <h5>absents</h5>
                    </div> 
                    
                    </div>  
                     <div className="presentsContainer">
                       <div className="presentsLegent">
                    </div>
                    <div>
                        <h5>presents</h5>
                    </div> 
                </div> 
                </div>
                </div>  
            </div>
        </div>  
    )
};

export default StudentList;