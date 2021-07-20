import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [setYear, changeYear] = useState("");
  const getOnChangeYear = (year) => {
    changeYear(year);
  };
  // console.log(setYear);

  const filteredExpoenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === setYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter setOnChangeYear={getOnChangeYear}></ExpenseFilter>
      </div>

      {filteredExpoenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
