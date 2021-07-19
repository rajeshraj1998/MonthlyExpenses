/* import ExpenseItem from './components/ExpenseItem'; */
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    { title: "car insurence", amount: 23.6, date: new Date(2021, 5, 15) },
    { title: "wifi bill", amount: 12.6, date: new Date(2021, 6, 15) },
    { title: "maintenece", amount: 25.6, date: new Date(2021, 7, 15) },
    { title: "morgage", amount: 98.6, date: new Date(2021, 8, 15) },
  ];

  const expenseHandler = (expense) => {
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
