/* import ExpenseItem from './components/ExpenseItem'; */
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_DATA = [
  { title: "car insurence", amount: 23.6, date: new Date(2021, 5, 15), id:25},
  { title: "wifi bill", amount: 12.6, date: new Date(2021, 6, 15) , id:20},
  { title: "maintenece", amount: 25.6, date: new Date(2021, 7, 15), id:15},
  { title: "morgage", amount: 98.6, date: new Date(2021, 8, 15), id:16 },
];


function App() {
  const [expense, addExpense] = useState(DUMMY_DATA);

  const expenseHandler = (newerExpense) => {

    addExpense((prevState)=>{
      return(
        [newerExpense, ...prevState]
      )
    });
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={expenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
