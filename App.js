

import './App.css';
import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
// import ExpensesFilter from './Components/Expenses/ExpenseFilter';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49,
   date: new Date(2021, 2, 12)
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses,setExpenses]=useState(Dummy_Expenses);

  const addExpenseDataHandler=(enteredExpenses)=>{
      setExpenses((prevExpenses)=>{
        return [enteredExpenses,...prevExpenses];
      });
     
      

  }
  console.log(expenses);
  // const updatedList=expenses.filter((currElem)=>{
  //       return currElem.date===expenses.date;
  //     });
  //     console.log(updatedList);
      // setExpenses(updatedList);

  
        //  console.log(enteredExpenses);


  const passExpenses=(enteredExpenses)=>{
    console.log(enteredExpenses);
  }

  
  
  return (
    <div className="App">
      
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
     <Expenses items={expenses} onPassExpenses={passExpenses} />
      
    </div>
  );
}

export default App;
