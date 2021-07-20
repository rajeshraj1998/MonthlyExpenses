import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
    <li>
    <Card className="expenses">
      <div>
        <ExpenseFilter setOnChangeYear={getOnChangeYear}></ExpenseFilter>
      </div>
      <ExpensesList items={filteredExpoenses}></ExpensesList>
    </Card>
    </li>
  );
};

export default Expenses;
