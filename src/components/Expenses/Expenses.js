import React, { useState } from "react";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [setYear, changeYear] = useState("");
  const getOnChangeYear = (year) => {
    changeYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === setYear;
  });

  return (
    <li>
      <Card className="expenses">
        <div>
          <ExpenseFilter setOnChangeYear={getOnChangeYear}></ExpenseFilter>
        </div>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList
          items={filteredExpenses}
          editPar={props.editOrg}
          delPar={props.delOrg}></ExpensesList>
      </Card>
    </li>
  );
};

export default Expenses;
