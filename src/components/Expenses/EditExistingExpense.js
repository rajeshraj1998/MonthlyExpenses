import "./EditExistingExpense.css";
import React, { useState } from "react";

const EditExistingExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(props.data.title);
  const [enteredAmount, setEnteredAmount] = useState(props.data.amount);
  const [enteredDate, setEnteredDate] = useState(props.data.date);

  const onChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onChangeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const onChangeDate = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = () => {
    const obb = {
      ...props.data,
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.editParTwo(obb);
    props.closeEdit();
  };

  /*  let dateeee = `${enteredDate.getFullYear()}-${
    enteredDate.getMonth().toString().length === 1 &&
    "0" + enteredDate.getMonth()
  }-${enteredDate.getDate()}`; */

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={onChangeTitle}
            />
          </div>
          <div className="new-expense__control">
            <label for="amount">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              id="amount"
              value={enteredAmount}
              onChange={onChangeAmount}
            />
          </div>
          <div className="new-expense__control">
            <label for="Date">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              id="Date"
              value={enteredDate}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.closeEdit} type="button">
            Cancel
          </button>
          <button type="button" onClick={submitHandler}>
            Edit Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExistingExpense;
