import React , {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card"
import "./styles/ExpenseItem.css";

function ExpenseItem(props) {

  // a react hook - should called directly in react component
  const [title , setTtitle] = useState(props.title);

  const clickHandler = () => {
    setTtitle('Updated Title');
    console.log('clicked !');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div>
        <h2>{title}</h2>
        <div>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
