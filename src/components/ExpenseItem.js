import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  
 
/*   const month  = props.date.toLocaleString('en-US', {month:'long'});
  const day = props.date.toLocaleString('en-US', {day:'2-digit'});
  const year = props.date.getFullYear(); */
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
      <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
