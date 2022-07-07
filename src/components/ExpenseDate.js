import "./styles/Card.css";

function ExpenseDate(props) {
    
  const month = props.date.toLocaleString("fa-IR", { month: "long" });
  const day = props.date.toLocaleString("fa-IR", { day: "2-digit" });
  const year = props.date.toLocaleString("fa-IR", { year: "numeric" });

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
