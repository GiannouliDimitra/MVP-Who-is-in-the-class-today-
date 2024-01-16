import "./dateDisplay.css";

function DateDisplay(){
  let data = new Date();
  let date = data.toDateString();

return <div className="date">{date}</div>
};

export default DateDisplay;