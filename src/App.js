/* import ExpenseItem from './components/ExpenseItem'; */
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_DATA = [
  { title: "car insurence", amount: 23.6, date: new Date(2021, 5, 15), id: 0 },
  { title: "wifi bill", amount: 12.6, date: new Date(2021, 6, 15), id: 1 },
  { title: "maintenece", amount: 25.6, date: new Date(2021, 7, 15), id: 2 },
  { title: "morgage", amount: 98.6, date: new Date(2021, 8, 15), id: 3 },
];

function App() {
  const [expense, editExpenses] = useState(DUMMY_DATA);

  const expenseHandler = (newerExpense) => {
    newerExpense = {
      ...newerExpense,
      id: expense.length,
    };

    editExpenses((prevState) => {
      for (let i = 0; i < prevState.length; i++) {
        prevState[i].id = i;
      }

      return [...prevState, newerExpense];
    });
  };

  const editExisting = (data) => {
    // console.log(data);

    editExpenses((prevState) => {
      for (let dum of prevState) {
        if (dum.id === data.id) {
          dum.amount = data.amount;
          dum.title = data.title;
          dum.date = data.date;
        }
      }

      return [...prevState];
    });
  };

  const delData = (DataId) => {
    //console.log(DataId)
    editExpenses((prevState) => {
      prevState = prevState.filter((ele) => ele.id !== DataId);

      for (let i = 0; i < prevState.length; i++) {
        prevState[i].id = i;
      }

      return [...prevState];
    });
  };

  console.log(expense);

  return (
    <div>
      <NewExpense onAddExpense={expenseHandler} />
      <Expenses items={expense} editOrg={editExisting} delOrg={delData} />
    </div>
  );
}

export default App;
