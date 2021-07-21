import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses Found</h2>;
  }

  const updateDelList = (dataId) => {
    props.delPar(dataId);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            editParOne={props.editPar}
            delParOne={updateDelList}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
