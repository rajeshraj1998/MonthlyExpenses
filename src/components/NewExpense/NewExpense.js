/* import React, {useState} from 'react'; */
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{

   const saveExpenseDataHandler = (childData) =>{
        const expenseData = {
            ...childData,
            id:(Math.floor(Math.random()*50 )+1).toString(),
        }

       // console.log(expenseData);

        props.onAddExpense(expenseData);
   }

return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}>

        </ExpenseForm>
    </div>
);

}

export default NewExpense;