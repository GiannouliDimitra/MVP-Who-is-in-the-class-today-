import StudentItem from "./StudentItem";

function StudentList () {
    return (
        <div>
            {StudentList.map((student) => (
                <StudentItem
                />
            ))

            }
        </div>
    )
};

export default StudentList;