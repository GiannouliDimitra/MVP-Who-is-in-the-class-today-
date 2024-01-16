import StudentItem from "./StudentItem";
import AnalogClock from 'analog-clock-react';
import Navbar from "./Navbar";
import DateDisplay from "./DateDisplay";
import { PieChart } from 'react-minimal-pie-chart';
import ("./StudentList.css");

function StudentList ( { students,getStudents, countAbsents, absents } ) {
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
    return (
        <div className="studentListContainer">
            <Navbar/>
            <h2>Who is in the class?</h2>
            <div class="mainInfoContainer">
                <div className="date&time">
                    <DateDisplay />
                    <AnalogClock  {...options}/>
                </div>
                <div className="studentsContainer">
                    <div className="listCards">
                     {students.map((student) => (
                        <StudentItem key = {student._id} student ={student}
                        />
                    ))}
                </div>
                </div>
                <div className="pieChart">
                <PieChart
                    label={(props) => { return props.dataEntry.title;}}
                    data={[
                        { title: `${absents}`, value: 10, color: '#2347F9' },
                        { title: 'Presents', value: 15, color: '#FDC627' },
                        ]}
    />
                </div>
            </div>
            
                <h4>{absents}</h4>
        </div>  
    )
};

export default StudentList;