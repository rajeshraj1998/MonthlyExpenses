import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{

    const [isEditing, setIsEditing] = useState(false);

   const saveExpenseDataHandler = (childData) =>{
        const expenseData = {
            ...childData,
            id:(Math.floor(Math.random()*50 )+1).toString(),
        }

       // console.log(expenseData);

        props.onAddExpense(expenseData);
        setIsEditing(false);
   }

   const startEditingHandler = () =>{
       setIsEditing(true);
   }

   const stopEditingHandler = () =>{
    setIsEditing(false);
}

return(
    <div className="new-expense">

        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm stpEdit= {stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm> }
    </div>
);

}

export default NewExpense;