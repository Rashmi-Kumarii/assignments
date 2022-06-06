import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState("2019");
//to select a year
  const filterChangeHandler = (selectedYear) => {
     console.log("Expenses.js");
    
    setfilterYear(selectedYear);
  };
//   to compare teh selected year with expense date present in the logged components
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
//   console.log(filteredExpenses.length);
//   console.log(filteredExpenses);

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onfilterChangeHandler={filterChangeHandler}
        />
     <ExpensesList items={filteredExpenses}/>
      
        {/* <ExpenseItem
        expenseDate={props.items[0].date}
         expensetitle={props.items[0].title} 
         expenseamount={props.items[0].amount}
         />
           <ExpenseItem 
        expenseDate={props.items[1].date}
         expensetitle={props.items[1].title} 
         expenseamount={props.items[1].amount}
         />
         <ExpenseItem 
        expenseDate={props.items[2].date}
         expensetitle={props.items[2].title} 
         expenseamount={props.items[2].amount}
         />
         <ExpenseItem 
        expenseDate={props.items[3].date}
         expensetitle={props.items[3].title} 
         expenseamount={props.items[3].amount}
         /> */}
      </div>
    </div>
  );
};
export default Expenses;
