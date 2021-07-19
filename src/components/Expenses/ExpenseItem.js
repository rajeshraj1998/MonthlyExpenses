import React, {useState} from 'react';
import "./ExpenseItem.css";
import Card from '../ui/Card';

import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {

  const [expenseTitle, setTitle] = useState(props.title);
   /* expenseTitle = props.title; */
  let expenseAmount = props.amount;

  const clickHandler = ()=>{
    console.log("clicked");
    setTitle('updated');
   }
  return (
   
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
        </div>
        <button onClick = {clickHandler}>
            change Title
        </button>
      </Card>
  
  );
}

export default ExpenseItem;
