import React from 'react'
import './NewExpense.css';
import './ExpenseForm.js';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {
const saveExpenseDataHandler=(enteredExpenseData)=>{
  const ExpenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
}
  // console.log(ExpenseData);
      props.onAddExpenseData(ExpenseData);
}



  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense