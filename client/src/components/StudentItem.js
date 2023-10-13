import ("./StudentItem.css");

function StudentItem ( {student} ){
    return (
<div className ="studentCard">
    <img  className={student.isPresent} width="100px" src={student.image}/>
    <h2 className={student.isPresent}>{student.name}</h2>
    <p className={student.isPresent}>{student.isPresent}</p>
</div>
    )
};

export default StudentItem;