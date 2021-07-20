import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {


  /*  

  *****************************************************************************
  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_- using state once _-_-_-_-_-_-_-_-_-_-_-_-_-_-_
  *****************************************************************************

    const [usrDate, setUsrData] = useState(
      {
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
      }
    )

   const onChangeHandler = event =>{
    setUsrData(
      (prevState) =>{
        return(
          ...preState;
          enteredTitle:event.target.value;
        );
      }
    );
  }

  const onChangeAmount = event =>{
   setUsrData(
      (prevState) =>{
        return(
          ...preState;
          enteredAmount:event.target.value;
        );
      }
    );
  }

  const onChangeDate = event =>{
    setUsrData(
      (prevState) =>{
        return(
          ...preState;
          enteredDate:event.target.value;
        );
      }
    );
  }
    
  */


  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const onChangeHandler = event =>{
    setEnteredTitle(event.target.value);
  }

  const onChangeAmount = event =>{
    setEnteredAmount(event.target.value);
  }

  const onChangeDate = event =>{
    setEnteredDate(event.target.value);
  }

  const submitHandler = event =>{
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      }

      props.onSaveExpenseData(expenseData);

      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
  }

  return(
  <form onSubmit={submitHandler}>
    <div className="new-expense__controls">

      <div className="new-expense__control" >
        <label for='title'>Title</label>
        <input type="text" id="title" value={enteredTitle} onChange={onChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label for='amount'>Amount</label>
        <input type="number" min="0.01" step="0.01" id='amount' value={enteredAmount} onChange={onChangeAmount}/>
      </div>
      <div className="new-expense__control">
        <label for='Date'>Date</label>
        <input type="date" min='2019-01-01' max='2022-12-31' id='Date' value={enteredDate} onChange={onChangeDate}/>
      </div>
    </div>
    <div className="new-expense__actions">
        <button type='submit' >Add Expenses</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
